import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from "@apollo/client";
import { CombinedGraphQLErrors } from "@apollo/client/errors";
import { ErrorLink } from "@apollo/client/link/error";
import { from } from "rxjs";
import { mergeMap } from "rxjs/operators";
import { refreshAccessToken, useAuthStore } from "../../entities/auth";
import { router } from "./router/router.tsx";

const httpLink = new HttpLink({
    uri: import.meta.env.VITE_API_URL,
    credentials: "include",
});

const authMiddleware = new ApolloLink((operation, forward) => {
    const token = useAuthStore.getState().accessToken;

    operation.setContext(({ headers = {} }) => ({
        headers: {
            ...headers,
            Authorization: `Bearer ${token}`,
        },
    }));

    return forward(operation);
});

let isRefreshing = false;

let pendingRequests: Array<{ resolve: () => void; reject: (err: unknown) => void }> = [];

const resolvePendingRequests = () => {
    pendingRequests.forEach(({ resolve }) => resolve());
    pendingRequests = [];
};


const rejectPendingRequests = (error: unknown) => {
    pendingRequests.forEach(({ reject }) => reject(error));
    pendingRequests = [];
};

const errorLink = new ErrorLink(({ error, operation, forward }) => {
    const graphQLErrors = CombinedGraphQLErrors.is(error) ? error.errors : [];

    for (const err of graphQLErrors) {
        if (err.extensions?.code === "UNAUTHENTICATED") {
            if (!isRefreshing) {
                isRefreshing = true;

                return from(
                    refreshAccessToken()
                        .then((newToken) => {
                            useAuthStore.getState().setAccessToken(newToken);
                            resolvePendingRequests();
                            return newToken;
                        })
                        .catch((refreshError) => {
                            useAuthStore.getState().setAccessToken(null);
                            rejectPendingRequests(refreshError);
                            // ToDo: clear cache
                            router.navigate("/auth");
                            throw refreshError;
                        })
                        .finally(() => {
                            isRefreshing = false;
                        })
                ).pipe(mergeMap(() => forward(operation)));
            }

            return from(
                new Promise<void>((resolve, reject) => {
                    pendingRequests.push({ resolve, reject });
                })
            ).pipe(mergeMap(() => forward(operation)));
        }
    }
});

export const client = new ApolloClient({
    link: ApolloLink.from([errorLink, authMiddleware, httpLink]),
    cache: new InMemoryCache(),
});
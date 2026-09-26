import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from "@apollo/client";
import { useAuthStore } from "../../entities/auth/model/auth-store.ts";

const httpLink = new HttpLink({ uri: import.meta.env.VITE_API_URL });

const authMiddleware = new ApolloLink((operation, forward) => {
    const token = useAuthStore.getState().accessToken;

    operation.setContext(({ headers = {} }) => ({
        headers: {
            ...headers,
            Authorization: `Bearer ${token}`
        }
    }));

    return forward(operation);
});

export const client = new ApolloClient({
    link: ApolloLink.from([authMiddleware, httpLink]),
    cache: new InMemoryCache(),
});
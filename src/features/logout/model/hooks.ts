import { useLogout, useSetAccessToken } from "../../../entities/auth";
import { useApolloClient } from "@apollo/client/react";


export function useAuthLogout() {
    const setAccessToken = useSetAccessToken();
    const apolloClient = useApolloClient();

    return useLogout({
        onCompleted: () => {
            setAccessToken(null);
            apolloClient.clearStore();
        }
    });
}
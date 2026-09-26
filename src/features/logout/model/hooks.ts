import { useLogout, useSetAccessToken } from "../../../entities/auth";


export function useAuthLogout() {
    const setAccessToken = useSetAccessToken();

    return useLogout({
        onCompleted: () => setAccessToken(null)
    });
}
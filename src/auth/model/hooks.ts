import { useAuthStore } from "./auth-store.ts";


export const useAccessToken = () => useAuthStore((state) => state.accessToken);

export const useSetAccessToken = () => useAuthStore((state) => state.setAccessToken);
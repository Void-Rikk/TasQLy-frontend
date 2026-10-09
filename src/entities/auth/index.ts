import { useLogin, useRegister, useLogout } from "./api/hooks.ts";
import { useAccessToken, useSetAccessToken } from "./model/hooks.ts";
import { useAuthStore } from "./model/auth-store.ts";
import { refreshAccessToken } from "./api/refresh.ts";
import type { AuthPayload } from "./model/types.ts";


export {
    useLogin,
    useRegister,
    useLogout,
    useAccessToken,
    useSetAccessToken,
    useAuthStore,
    refreshAccessToken
};

export type {
    AuthPayload,
};
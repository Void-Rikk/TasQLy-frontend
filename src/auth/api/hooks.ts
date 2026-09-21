import { LOGIN, LOGOUT, REFRESH, REGISTER } from "./mutations.ts";
import { useMutation } from "@apollo/client/react";


export function useLogin({ onCompleted }: { onCompleted?: (...args: unknown[]) => void }) {
    return useMutation(LOGIN, {
        onCompleted
    });
}

export function useRegister({ onCompleted }: { onCompleted?: (...args: unknown[]) => void }) {
    return useMutation(REGISTER, {
        onCompleted
    });
}

export function useLogout({ onCompleted }: { onCompleted?: (...args: unknown[]) => void }) {
    return useMutation(LOGOUT, {
        onCompleted
    });
}

export function useRefresh({ onCompleted }: { onCompleted?: (...args: unknown[]) => void }) {
    return useMutation(REFRESH, {
        onCompleted
    });
}
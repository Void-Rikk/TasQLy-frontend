import { LOGIN, LOGOUT, REGISTER } from "./mutations.ts";
import { useMutation } from "@apollo/client/react";


export function useLogin({ onCompleted }: { onCompleted?: (...args: any[]) => void }) {
    return useMutation(LOGIN, {
        onCompleted
    });
}

export function useRegister({ onCompleted }: { onCompleted?: (...args: any[]) => void }) {
    return useMutation(REGISTER, {
        onCompleted
    });
}

export function useLogout({ onCompleted }: { onCompleted?: (...args: any[]) => void }) {
    return useMutation(LOGOUT, {
        onCompleted
    });
}
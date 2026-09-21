import { useReducer } from "react";
import type { LoginFields, LoginFormAction } from "./types.ts";
import { useLogin, useSetAccessToken } from "../../../entities/auth";
import type { AuthPayload } from "../../../entities/auth/model/types.ts";


function loginFormReducer(state: LoginFields, action: LoginFormAction) {

    switch (action.type) {
        case "CHANGE_EMAIL": {
            return {
                ...state,
                email: action.payload
            }
        }
        case "CHANGE_PASSWORD": {
            return {
                ...state,
                password: action.payload
            }
        }
    }
}

const initialFormState: LoginFields = {
    email: "",
    password: ""
};

export function useLoginForm() {

    return useReducer(loginFormReducer, initialFormState);
}

export function useAuthLogin() {
    const setAccessToken = useSetAccessToken();

    return useLogin({
        onCompleted: (data: { login: AuthPayload }) => setAccessToken(data.login.accessToken),
    });
}
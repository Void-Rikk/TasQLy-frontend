import { useReducer } from "react";
import type { RegisterFields, RegisterFormAction } from "./types.ts";
import { useRegister, useSetAccessToken } from "../../../auth";


function registerFormReducer(state: RegisterFields, action: RegisterFormAction): RegisterFields {

    switch (action.type) {
        case "CHANGE_EMAIL": {
            return {
                ...state,
                email: action.payload,
            }
        }
        case "CHANGE_PASSWORD": {
            return {
                ...state,
                password: action.payload,
            }
        }
        case "CHANGE_NAME": {
            return {
                ...state,
                password: action.payload,
            }
        }
        case "CHANGE_CONFIRM_PASSWORD": {
            return {
                ...state,
                confirmPassword: action.payload,
            }
        }
    }
}

const initialFormState: RegisterFields = {
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
}

export function useRegisterForm() {

    return useReducer(registerFormReducer, initialFormState);
}

export function useAuthRegister() {
    const setAccessToken = useSetAccessToken();

    return useRegister({
        onCompleted: (data: { register: { accessToken: string } }) => setAccessToken(data.register.accessToken)
    });
}
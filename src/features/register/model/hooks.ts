import { useReducer } from "react";
import type { RegisterFields, RegisterFormAction } from "./types.ts";


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
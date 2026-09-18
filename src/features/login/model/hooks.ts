import { useReducer } from "react";
import type { LoginFields, LoginFormAction } from "./types.ts";


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
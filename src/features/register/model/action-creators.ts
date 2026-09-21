import type { RegisterFormAction } from "./types.ts";


export function changeEmailAction(payload: string): RegisterFormAction {
    return {
        type: "CHANGE_EMAIL",
        payload,
    }
}

export function changeNameAction(payload: string): RegisterFormAction {
    return {
        type: "CHANGE_NAME",
        payload,
    }
}

export function changePasswordAction(payload: string): RegisterFormAction {
    return {
        type: "CHANGE_PASSWORD",
        payload,
    }
}

export function changeConfirmPasswordAction(payload: string): RegisterFormAction {
    return {
        type: "CHANGE_PASSWORD",
        payload,
    }
}
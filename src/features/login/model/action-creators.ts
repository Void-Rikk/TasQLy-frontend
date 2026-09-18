import type { LoginFormAction } from "./types.ts";


export function changeEmailAction(payload: string): LoginFormAction {

    return {
        type: "CHANGE_EMAIL",
        payload
    }
}

export function changePasswordAction(payload: string): LoginFormAction {

    return {
        type: "CHANGE_PASSWORD",
        payload
    }
}
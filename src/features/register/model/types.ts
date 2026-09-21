export type RegisterFields = {
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
};

export type RegisterFormAction = {
    type: "CHANGE_EMAIL" | "CHANGE_NAME" | "CHANGE_PASSWORD" | "CHANGE_CONFIRM_PASSWORD",
    payload: string,
};
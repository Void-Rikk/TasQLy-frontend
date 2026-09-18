export type LoginFields = {
    email: string;
    password: string;
};

export type LoginFormAction = {
    type: "CHANGE_EMAIL" | "CHANGE_PASSWORD",
    payload: string;
};
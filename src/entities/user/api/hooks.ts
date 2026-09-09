import { useMutation, useQuery } from "@apollo/client/react";
import { GET_ME } from "./queries.ts";
import { LOGIN, LOGOUT, REFRESH, REGISTER } from "./mutations.ts";


export function useMe() {
    return useQuery(GET_ME);
}

export function useLogin() {
    return useMutation(LOGIN);
}

export function useRegister() {
    return useMutation(REGISTER);
}

export function useLogout() {
    return useMutation(LOGOUT);
}

export function useRefresh() {
    return useMutation(REFRESH);
}
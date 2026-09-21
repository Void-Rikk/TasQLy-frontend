import type { AuthPayload } from "../model/types.ts";
import { gql, type TypedDocumentNode } from "@apollo/client";


type LoginMutation = {
    login: AuthPayload;
}

type LoginMutationVariables = {
    input: {
        email: string;
        password: string;
    }
}

export const LOGIN: TypedDocumentNode<
    LoginMutation,
    LoginMutationVariables
> = gql`
    mutation Login($input: LoginInput!) {
        login(input: $input) {
            accessToken
        }
    }
`;

type RegisterMutation = {
    register: AuthPayload;
}

type RegisterMutationVariables = {
    input: {
        name: string;
        email: string;
        password: string;
    }
}

export const REGISTER: TypedDocumentNode<
    RegisterMutation,
    RegisterMutationVariables
> = gql`
    mutation Register($input: RegisterInput!) {
        register(input: $input) {
            accessToken
        }
    }
`;

type LogoutMutation = {
    logout: boolean;
}

type LogoutMutationVariables = Record<string, never>;

export const LOGOUT: TypedDocumentNode<
    LogoutMutation,
    LogoutMutationVariables
> = gql`
    mutation Logout {
        logout
    }
`;

type RefreshMutation = {
    refresh: AuthPayload;
}

type RefreshMutationVariables = Record<string, never>

export const REFRESH: TypedDocumentNode<
    RefreshMutation,
    RefreshMutationVariables
> = gql`
    mutation Refresh {
        refresh {
            accessToken
        }
    }
`;
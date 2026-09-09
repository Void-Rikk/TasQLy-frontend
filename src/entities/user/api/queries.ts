import { gql, type TypedDocumentNode } from "@apollo/client";
import type { User } from "../model/types.ts";

type GetMeQuery = {
    me: User;
}

type GetMeQueryVariables = Record<string, never>;

export const GET_ME: TypedDocumentNode<
    GetMeQuery,
    GetMeQueryVariables
> = gql`
    query GetMe {
        me {
            id
            name
            email
        }
    }
`;
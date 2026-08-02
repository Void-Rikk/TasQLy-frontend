import { gql, type TypedDocumentNode } from "@apollo/client";
import type { Task } from "../model/types.ts";


type GetUsersQuery = {
    tasks: Task[];
}

type GetUsersQueryVariables = Record<string, never>;

export const GET_USERS: TypedDocumentNode<
    GetUsersQuery,
    GetUsersQueryVariables
> = gql`
    query GetTasks {
        tasks {
            id
            title
            done
            tags {
                id
                name
            }
        }
    }
`;
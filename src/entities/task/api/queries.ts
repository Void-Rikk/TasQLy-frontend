import { gql, type TypedDocumentNode } from "@apollo/client";
import type { Task } from "../model/types.ts";


type GetTasksQuery = {
    tasks: Task[];
}

type GetTasksQueryVariables = Record<string, never>;

export const GET_TASKS: TypedDocumentNode<
    GetTasksQuery,
    GetTasksQueryVariables
> = gql`
    query GetTasks {
        tasks {
            id
            title
            description
            priority
            status
            tags {
                id
                name
            }
        }
    }
`;
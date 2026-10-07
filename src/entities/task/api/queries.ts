import { gql, type TypedDocumentNode } from "@apollo/client";
import type { Task } from "../model/types.ts";


export type GetTasksQuery = {
    tasks: Task[];
}

export type GetTasksQueryVariables = {
    status?: "TO_DO" | "IN_PROGRESS" | "DONE"
};

export const GET_TASKS: TypedDocumentNode<
    GetTasksQuery,
    GetTasksQueryVariables
> = gql`
    query GetTasks($status: String) {
        tasks(status: $status) {
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
import { gql, type TypedDocumentNode } from "@apollo/client";
import type { Task } from "../model/types.ts";


export type GetTasksQuery = {
    tasks: Task[];
}

export type GetTasksQueryVariables = {
    status?: "TO_DO" | "IN_PROGRESS" | "DONE",
    searchQuery?: string,
};

export const GET_TASKS: TypedDocumentNode<
    GetTasksQuery,
    GetTasksQueryVariables
> = gql`
    query GetTasks($status: String, $searchQuery: String) {
        tasks(status: $status, searchQuery: $searchQuery) {
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
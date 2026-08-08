import { gql, type TypedDocumentNode } from "@apollo/client";
import type { Task, TaskPriority } from "../model/types.ts";


type CreateTaskMutation = {
    createTask: Task,
}

type CreateTaskMutationVariables = {
    input: {
        title: string,
        description?: string,
        priority: TaskPriority
        tagIds?: string[]
    }
}

type DeleteTaskMutation = {
    deleteTask: boolean,
}

type DeleteTaskMutationVariables = {
    id: string,
}

type AdvanceTaskMutation = {
    advanceTask: Task,
}

type AdvanceTaskMutationVariables = {
    id: string,
}

export const CREATE_TASK: TypedDocumentNode<
    CreateTaskMutation,
    CreateTaskMutationVariables
> = gql`
    mutation CreateTask($input: CreateTaskInput!) {
        createTask(input: $input) {
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

export const DELETE_TASK: TypedDocumentNode<
    DeleteTaskMutation,
    DeleteTaskMutationVariables
> = gql`
    mutation DeleteTask($id: ID!) {
        deleteTask(id: $id)
    }
`;

export const ADVANCE_TASK: TypedDocumentNode<
    AdvanceTaskMutation,
    AdvanceTaskMutationVariables
> = gql`
    mutation AdvanceTask($id: ID!) {
        advanceTask(id: $id) {
            id
            status
        }
    }
`;
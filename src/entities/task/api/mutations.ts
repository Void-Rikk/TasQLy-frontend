import { gql, type TypedDocumentNode } from "@apollo/client";
import type { Task, TaskPriority } from "../model/types.ts";


type CreateTaskMutation = {
    createTask: Task;
}

type CreateTaskMutationVariables = {
    input: {
        title: string,
        description?: string,
        priority: TaskPriority
        tagIds?: string[]
    }
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
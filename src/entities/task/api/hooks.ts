import { useMutation, useQuery } from "@apollo/client/react";
import { GET_TASKS } from "./queries.ts";
import { CREATE_TASK } from "./mutations.ts";

export function useTasks() {
    return useQuery(GET_TASKS);
}

export function useCreateTask() {
    return useMutation(CREATE_TASK);
}
import { useMutation, useQuery } from "@apollo/client/react";
import { GET_TASKS } from "./queries.ts";
import { ADVANCE_TASK, CREATE_TASK, DELETE_TASK } from "./mutations.ts";
import { NEW_TASK_FRAGMENT } from "./fragments.ts";

export function useTasks() {
    return useQuery(GET_TASKS);
}

export function useCreateTask() {
    return useMutation(CREATE_TASK, {
        update(cache, { data }) {
            if (!data) return;

            cache.modify({
                fields: {
                    tasks(existingTasks = []) {
                        const newTaskRef = cache.writeFragment({
                            data: data.createTask,
                            fragment: NEW_TASK_FRAGMENT
                        });
                        return [...existingTasks, newTaskRef];
                    }
                }
            })
        }
    });
}

export function useDeleteTask() {
    return useMutation(DELETE_TASK, {
        update(cache, { data }, { variables }) {
            if (!data || !variables) return;

            if (data?.deleteTask) {
                cache.evict({ id: cache.identify({ __typename: "Task", id: variables.id }) });
                cache.gc();
            }
        }
    })
}

export function useAdvanceTask() {
    return useMutation(ADVANCE_TASK);
}
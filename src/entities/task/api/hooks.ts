import { useMutation, useQuery } from "@apollo/client/react";
import { GET_TASKS } from "./queries.ts";
import { CREATE_TASK } from "./mutations.ts";
import { NEW_TASK_FRAGMENT } from "./fragments.ts";

export function useTasks() {
    return useQuery(GET_TASKS);
}

export function useCreateTask() {
    return useMutation(CREATE_TASK, {
        update(cache, { data }) {
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
import type { Task } from "../../../entities/task";
import type { TaskPriority } from "../../../entities/task/model/types.ts";

export type CreateTaskForm = {
    tags: Set<string>,
} & Omit<Task, "id" | "tags" | "status">;

export type CreateTaskFormSetters = {
    resetForm: () => void,
    setTitle: (newTitle: string) => void,
    setDescription: (newDescription: string) => void,
    setPriority: (newPriority: TaskPriority) => void,
    setTags: (tagName: string) => void
}
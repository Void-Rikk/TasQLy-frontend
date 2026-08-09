import type { Task } from "../../../entities/task";
import type { TaskPriority } from "../../../entities/task";

export type CreateTaskForm = {
    tags: Set<string>,
    description: string;
} & Omit<Task, "id" | "tags" | "status" | "description">;

export type CreateTaskFormSetters = {
    resetForm: () => void,
    setTitle: (newTitle: string) => void,
    setDescription: (newDescription: string) => void,
    setPriority: (newPriority: TaskPriority) => void,
    setTags: (tagName: string) => void
}
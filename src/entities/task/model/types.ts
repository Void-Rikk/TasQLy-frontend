import type { Tag } from "../../tag";

export type TaskPriority = "LOW" | "MEDIUM" | "HIGH";

export type TaskStatus = "TO_DO" | "IN_PROGRESS" | "DONE";

export type Task = {
    id: string,
    title: string,
    description?: string,
    priority: TaskPriority,
    status: TaskStatus,
    tags?: Tag[]
}
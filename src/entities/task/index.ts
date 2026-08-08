import { useTasks, useCreateTask, useDeleteTask, useAdvanceTask } from "./api/hooks.ts";
import { TaskCard } from "./ui/task-card.tsx";
import { type TaskStats, calculateTaskStats } from "./model/stats.ts";
import type { Task, TaskPriority, TaskStatus } from "./model/types.ts";

export {
    useTasks,
    useCreateTask,
    TaskCard,
    useDeleteTask,
    useAdvanceTask,
    calculateTaskStats
}

export type {
    TaskStats,
    Task,
    TaskPriority,
    TaskStatus
}
import { useTasks, useCreateTask, useDeleteTask, useAdvanceTask } from "./api/hooks.ts";
import { TaskCard } from "./ui/task-card.tsx";
import { type TaskStats, calculateTaskStats } from "./model/stats.ts";
import type { Task, TaskPriority, TaskStatus } from "./model/types.ts";
import { useTasksFiltersStatus, useSetTasksFiltersStatus } from "./model/tasks-filters-store.ts";



export {
    useTasks,
    useCreateTask,
    TaskCard,
    useDeleteTask,
    useAdvanceTask,
    calculateTaskStats,
    useTasksFiltersStatus,
    useSetTasksFiltersStatus
}

export type {
    TaskStats,
    Task,
    TaskPriority,
    TaskStatus
}
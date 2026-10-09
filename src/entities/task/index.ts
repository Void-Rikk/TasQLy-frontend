import { useTasks, useCreateTask, useDeleteTask, useAdvanceTask } from "./api/hooks.ts";
import { TaskCard } from "./ui/task-card.tsx";
import { type TaskStats, calculateTaskStats } from "./model/stats.ts";
import type { Task, TaskPriority, TaskStatus } from "./model/types.ts";
import {
    useTasksFiltersStatus,
    useSetTasksFiltersStatus,
    useTasksFiltersSearchQuery,
    useSetTasksFiltersSearchQuery,
    useTasksFiltersTagIds,
    useSetTasksFiltersTagIds
} from "./model/tasks-filters-store.ts";
import { NoTasksMessage } from "./ui/no-tasks-message.tsx";


export {
    useTasks,
    useCreateTask,
    TaskCard,
    useDeleteTask,
    useAdvanceTask,
    calculateTaskStats,
    useTasksFiltersStatus,
    useSetTasksFiltersStatus,
    NoTasksMessage,
    useTasksFiltersSearchQuery,
    useSetTasksFiltersSearchQuery,
    useTasksFiltersTagIds,
    useSetTasksFiltersTagIds,
}

export type {
    TaskStats,
    Task,
    TaskPriority,
    TaskStatus
}
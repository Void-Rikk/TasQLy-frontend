import { create } from "zustand/react";
import type { TaskStatus } from "./types.ts";

type TasksFiltersStoreState = {
    status: TaskStatus | "ALL";

    setStatus: (status: TaskStatus) => void;
};

export const useTasksFilters = create<TasksFiltersStoreState>()((set) => ({
    status: "ALL",
    setStatus: (status: TaskStatus) => set({ status })
}));

export const useTasksFiltersStatus = () => useTasksFilters(state => state.status);

export const useSetTasksFiltersStatus = () => useTasksFilters(state => state.setStatus);
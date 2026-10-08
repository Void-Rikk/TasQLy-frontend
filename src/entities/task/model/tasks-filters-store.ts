import { create } from "zustand/react";
import type { TaskStatus } from "./types.ts";

type TasksFiltersStoreState = {
    status: TaskStatus | "ALL";
    searchQuery: string;

    setStatus: (status: TaskStatus) => void;
    setSearchQuery: (searchQuery: string) => void;
};

export const useTasksFilters = create<TasksFiltersStoreState>()((set) => ({
    status: "ALL",
    searchQuery: "",
    setStatus: (status: TaskStatus) => set({ status }),
    setSearchQuery: (searchQuery: string) => set({ searchQuery })
}));

export const useTasksFiltersStatus = () => useTasksFilters(state => state.status);
export const useTasksFiltersSearchQuery = () => useTasksFilters(state => state.searchQuery);

export const useSetTasksFiltersStatus = () => useTasksFilters(state => state.setStatus);
export const useSetTasksFiltersSearchQuery = () => useTasksFilters(state => state.setSearchQuery);
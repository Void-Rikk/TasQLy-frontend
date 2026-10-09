import { create } from "zustand/react";
import type { TaskStatus } from "./types.ts";

type TasksFiltersStoreState = {
    status: TaskStatus | "ALL";
    searchQuery: string;
    tagIds: Set<string>;

    setStatus: (status: TaskStatus) => void;
    setSearchQuery: (searchQuery: string) => void;
    setTagIds: (tagId: string) => void;
};

export const useTasksFilters = create<TasksFiltersStoreState>()((set) => ({
    status: "ALL",
    searchQuery: "",
    tagIds: new Set(),
    setTagIds: (tagId: string) => set((state) => {
        const newSet = new Set<string>(state.tagIds);
        if (newSet.has(tagId)) {
            newSet.delete(tagId);
        }
        else {
            newSet.add(tagId);
        }

        return { tagIds: newSet };
    }),
    setStatus: (status: TaskStatus) => set({ status }),
    setSearchQuery: (searchQuery: string) => set({ searchQuery })
}));

export const useTasksFiltersStatus = () => useTasksFilters(state => state.status);
export const useTasksFiltersSearchQuery = () => useTasksFilters(state => state.searchQuery);
export const useTasksFiltersTagIds = () => useTasksFilters(state => state.tagIds);

export const useSetTasksFiltersStatus = () => useTasksFilters(state => state.setStatus);
export const useSetTasksFiltersSearchQuery = () => useTasksFilters(state => state.setSearchQuery);
export const useSetTasksFiltersTagIds = () => useTasksFilters(state => state.setTagIds);
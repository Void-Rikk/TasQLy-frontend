import { useTasksFilters } from "../model/tasks-filters-store.ts";

describe("tasks filters store", () => {
    beforeEach(() => {
        useTasksFilters.setState({
            status: "ALL",
            searchQuery: "",
        });
    });

    it("has default values", () => {
        expect(useTasksFilters.getState().status).toBe("ALL");
        expect(useTasksFilters.getState().searchQuery).toBe("");
    });

    it("updates task status filter", () => {
        useTasksFilters.getState().setStatus("TO_DO");

        expect(useTasksFilters.getState().status).toBe("TO_DO");
    });

    it("updates search query filter", () => {
        useTasksFilters.getState().setSearchQuery("bug");

        expect(useTasksFilters.getState().searchQuery).toBe("bug");
    });
});
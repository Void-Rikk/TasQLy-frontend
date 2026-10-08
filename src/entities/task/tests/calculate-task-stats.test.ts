import { calculateTaskStats } from "../model/stats.ts";
import type { Task } from "../model/types.ts";

describe("calculateTaskStats", () => {
    it("returns zero stats for an empty list", () => {
        expect(calculateTaskStats([])).toEqual({
            totalTasks: 0,
            activeTasks: 0,
            doneTasks: 0,
        });
    });

    it("counts done and active tasks for a mixed task list", () => {
        const tasks: Task[] = [
            { id: "1", title: "Read docs", priority: "LOW", status: "TO_DO" },
            { id: "2", title: "Implement API", priority: "HIGH", status: "IN_PROGRESS" },
            { id: "3", title: "Review PR", priority: "MEDIUM", status: "DONE" },
            { id: "4", title: "Ship release", priority: "LOW", status: "DONE" },
        ];

        expect(calculateTaskStats(tasks)).toEqual({
            totalTasks: 4,
            activeTasks: 2,
            doneTasks: 2,
        });
    });

    it("treats all non-DONE statuses as active tasks", () => {
        const tasks: Task[] = [
            { id: "1", title: "Task 1", priority: "LOW", status: "TO_DO" },
            { id: "2", title: "Task 2", priority: "MEDIUM", status: "IN_PROGRESS" },
            { id: "3", title: "Task 3", priority: "HIGH", status: "IN_PROGRESS" },
        ];

        expect(calculateTaskStats(tasks)).toEqual({
            totalTasks: 3,
            activeTasks: 3,
            doneTasks: 0,
        });
    });
});
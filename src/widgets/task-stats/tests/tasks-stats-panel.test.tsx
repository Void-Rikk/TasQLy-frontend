import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { TasksStatsPanel } from "../ui/tasks-stats-panel.tsx";
import { calculateTaskStats, useTasks } from "../../../entities/task";

vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        t: (key: string) => ({
            "stats.totalTasks": "Total tasks",
            "stats.activeTasks": "Active tasks",
            "stats.doneTasks": "Done tasks",
        })[key] ?? key,
    }),
}));

vi.mock("../../../entities/task", () => ({
    useTasks: vi.fn(),
    calculateTaskStats: vi.fn((tasks) => {
        const totalTasks = tasks.length;
        const doneTasks = tasks.filter((task: { status: string }) => task.status === "DONE").length;
        const activeTasks = totalTasks - doneTasks;

        return {
            totalTasks,
            activeTasks,
            doneTasks,
        };
    }),
}));

describe("TasksStatsPanel", () => {
    beforeEach(() => {
        vi.mocked(useTasks).mockReset();
        vi.mocked(calculateTaskStats).mockClear();
    });

    it("renders task statistics for loaded tasks", () => {
        vi.mocked(useTasks).mockReturnValue({
            data: {
                tasks: [
                    { id: "1", title: "Task 1", priority: "LOW", status: "TO_DO" },
                    { id: "2", title: "Task 2", priority: "MEDIUM", status: "IN_PROGRESS" },
                    { id: "3", title: "Task 3", priority: "HIGH", status: "DONE" },
                    { id: "4", title: "Task 4", priority: "LOW", status: "DONE" },
                ],
            },
        } as never);

        render(<TasksStatsPanel />);

        expect(screen.getByText("Total tasks")).toBeInTheDocument();
        expect(screen.getByText("Active tasks")).toBeInTheDocument();
        expect(screen.getByText("Done tasks")).toBeInTheDocument();

        expect(screen.getAllByText("2")).toHaveLength(2);
        expect(screen.getByText("4")).toBeInTheDocument();
    });

    it("renders zero stats when there are no tasks", () => {
        vi.mocked(useTasks).mockReturnValue({
            data: null,
        } as never);

        render(<TasksStatsPanel />);

        expect(screen.getAllByText("0")).toHaveLength(3);
        expect(calculateTaskStats).toHaveBeenCalledWith([]);
    });
});

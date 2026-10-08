import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { TaskCard } from "../ui/task-card.tsx";
import type { Task } from "../model/types.ts";
import { useMedia } from "../../../shared/lib/utils";

vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        t: (key: string) => ({
            "taskStatus.TO_DO": "To do",
            "taskStatus.IN_PROGRESS": "In progress",
            "taskStatus.DONE": "Done",
        })[key] ?? key,
    }),
}));

vi.mock("../../../shared/lib/utils", () => ({
    useMedia: vi.fn(() => false),
}));

describe("TaskCard", () => {
    const task: Task = {
        id: "1",
        title: "Fix login bug",
        description: "Need to fix validation issue",
        priority: "HIGH",
        status: "TO_DO",
        tags: [
            { id: "tag-1", name: "frontend" },
            { id: "tag-2", name: "bug" },
        ],
    };

    afterEach(() => {
        vi.mocked(useMedia).mockReturnValue(false);
    });

    it("renders task title, description, status and tags", () => {
        render(<TaskCard task={task} />);

        expect(screen.getByText("Fix login bug")).toBeInTheDocument();
        expect(screen.getByText("Need to fix validation issue")).toBeInTheDocument();
        expect(screen.getByText("To do")).toBeInTheDocument();
        expect(screen.getByText("frontend")).toBeInTheDocument();
        expect(screen.getByText("bug")).toBeInTheDocument();
    });

    it("renders custom header and footer actions", () => {
        render(
            <TaskCard
                task={task}
                headerActions={<button type="button">Header action</button>}
                footerActions={<button type="button">Footer action</button>}
            />,
        );

        expect(screen.getByRole("button", { name: "Header action" })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "Footer action" })).toBeInTheDocument();
    });

    it("adds overlay and line-through style when task is done", () => {
        const { container } = render(
            <TaskCard
                task={{
                    ...task,
                    status: "DONE",
                    description: "Completed work",
                }}
            />,
        );

        expect(screen.getByText("Fix login bug").closest("p")).toHaveClass("line-through");

        const overlay = Array.from(container.querySelectorAll("div")).find((element) =>
            element.className.includes("bg-[rgba(0,0,0,0.25)]")
        );

        expect(overlay).toBeInTheDocument();
    });

    it("renders header actions on mobile and keeps the status in footer", () => {
        vi.mocked(useMedia).mockReturnValue(true);

        render(
            <TaskCard
                task={task}
                headerActions={<button type="button">Mobile action</button>}
            />,
        );

        expect(screen.getByRole("button", { name: "Mobile action" })).toBeInTheDocument();
        expect(screen.getAllByText("To do")).toHaveLength(1);
    });
});

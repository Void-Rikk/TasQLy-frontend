import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { StatusTabs } from "../ui/status-tabs.tsx";
import { useSetTasksFiltersStatus, useTasksFiltersStatus } from "../../../entities/task";

vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        t: (key: string) => ({
            "statusFilterSection.allTasksOption": "All tasks",
            "statusFilterSection.toDoOption": "To do",
            "statusFilterSection.inProgressOption": "In progress",
            "statusFilterSection.doneOption": "Done",
        })[key] ?? key,
    }),
}));

vi.mock("../../../entities/task", () => ({
    useTasksFiltersStatus: vi.fn(),
    useSetTasksFiltersStatus: vi.fn(),
}));

describe("StatusTabs", () => {
    const mockSetActiveTab = vi.fn();
    const mockUseTasksFiltersStatus = vi.mocked(useTasksFiltersStatus);

    beforeEach(() => {
        mockSetActiveTab.mockReset();
        mockUseTasksFiltersStatus.mockClear();
        mockUseTasksFiltersStatus.mockReturnValue("ALL");
        vi.mocked(useSetTasksFiltersStatus).mockReturnValue(mockSetActiveTab);
    });

    it("renders all status tabs", () => {
        render(<StatusTabs />);

        expect(screen.getByText("All tasks")).toBeInTheDocument();
        expect(screen.getByText("To do")).toBeInTheDocument();
        expect(screen.getByText("In progress")).toBeInTheDocument();
        expect(screen.getByText("Done")).toBeInTheDocument();
    });

    it("calls setActiveTab with the clicked tab id", async () => {
        const user = userEvent.setup();

        render(<StatusTabs />);

        await user.click(screen.getByText("To do"));

        expect(mockSetActiveTab).toHaveBeenCalledTimes(1);
        expect(mockSetActiveTab).toHaveBeenCalledWith("TO_DO");
    });

    it("marks the active tab as active", () => {
        mockUseTasksFiltersStatus.mockReturnValue("DONE");

        render(<StatusTabs />);

        expect(screen.getByText("Done")).toHaveClass("bg-(--bg-light)");
    });
});

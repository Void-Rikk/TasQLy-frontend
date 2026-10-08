import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { SearchForm } from "../ui/search-form.tsx";
import { useSetTasksFiltersSearchQuery } from "../../../entities/task";

vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        t: (key: string) => ({
            "searchSection.searchPlaceholder": "Search tasks",
        })[key] ?? key,
    }),
}));

vi.mock("../../../entities/task", () => ({
    useSetTasksFiltersSearchQuery: vi.fn(),
}));

describe("SearchForm", () => {
    const mockSetSearchQuery = vi.fn();

    beforeEach(() => {
        mockSetSearchQuery.mockReset();
        vi.mocked(useSetTasksFiltersSearchQuery).mockReturnValue(mockSetSearchQuery);
    });

    it("renders input with placeholder", () => {
        render(<SearchForm />);

        expect(screen.getByPlaceholderText("Search tasks")).toBeInTheDocument();
    });

    it("updates input value while typing", async () => {
        const user = userEvent.setup();

        render(<SearchForm />);

        const input = screen.getByPlaceholderText("Search tasks");

        await user.type(input, "bug");

        expect(input).toHaveValue("bug");
    });

    it("debounces and sends the search query to the store", async () => {
        const user = userEvent.setup();

        render(<SearchForm />);

        const input = screen.getByPlaceholderText("Search tasks");

        await user.type(input, "bug");

        await waitFor(() => {
            expect(mockSetSearchQuery).toHaveBeenCalledWith("bug");
        }, { timeout: 1000 });
    });

    it("sends an empty string after clearing input", async () => {
        const user = userEvent.setup();

        render(<SearchForm />);

        const input = screen.getByPlaceholderText("Search tasks");

        await user.type(input, "bug");
        await user.clear(input);

        await waitFor(() => {
            expect(mockSetSearchQuery).toHaveBeenLastCalledWith("");
        }, { timeout: 1000 });
    });
});
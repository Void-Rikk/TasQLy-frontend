import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { AuthForm } from "../ui/auth-form.tsx";

vi.mock("../../../shared/ui/icons/GraphQL.png", () => ({
    default: "graphql-logo",
}));

vi.mock("../ui/auth-form-switcher.tsx", () => ({
    AuthFormSwitcher: ({ activeTab, setActiveTab }: {
        activeTab: string;
        setActiveTab: (tabId: string) => void;
    }) => (
        <div>
            <button type="button" onClick={() => setActiveTab("login")} aria-pressed={activeTab === "login"}>
                Login tab
            </button>
            <button type="button" onClick={() => setActiveTab("register")} aria-pressed={activeTab === "register"}>
                Register tab
            </button>
        </div>
    ),
}));

vi.mock("../../../features/login", () => ({
    LoginForm: () => <div>Login form content</div>,
}));

vi.mock("../../../features/register", () => ({
    RegisterForm: () => <div>Register form content</div>,
}));

describe("AuthForm", () => {
    it("renders the logo and login form by default", () => {
        render(<AuthForm />);

        expect(screen.getByRole("heading", { name: /tasqly/i })).toBeInTheDocument();
        expect(screen.getByAltText("Logo")).toHaveAttribute("src", "graphql-logo");
        expect(screen.getByText("Login form content")).toBeInTheDocument();
    });

    it("switches from login form to register form", async () => {
        const user = userEvent.setup();

        render(<AuthForm />);

        await user.click(screen.getByRole("button", { name: "Register tab" }));

        expect(screen.getByText("Register form content")).toBeInTheDocument();
        expect(screen.queryByText("Login form content")).not.toBeInTheDocument();
    });

    it("switches back to login form", async () => {
        const user = userEvent.setup();

        render(<AuthForm />);

        await user.click(screen.getByRole("button", { name: "Register tab" }));
        await user.click(screen.getByRole("button", { name: "Login tab" }));

        expect(screen.getByText("Login form content")).toBeInTheDocument();
        expect(screen.queryByText("Register form content")).not.toBeInTheDocument();
    });
});

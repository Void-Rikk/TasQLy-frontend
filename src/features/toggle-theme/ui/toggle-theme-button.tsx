import { useThemeStore } from "../model/theme-store.ts";
import { Button } from "../../../shared/ui/button";
import { Moon, Sun } from "lucide-react";
import { twMerge } from "tailwind-merge";


interface ToggleThemeButtonProps {
    className?: string;
}

export function ToggleThemeButton({ className } : ToggleThemeButtonProps) {
    const { theme, toggleTheme } = useThemeStore();

    return (
        <Button
            className={ twMerge(`relative flex justify-center gap-2 items-center p-1.5 rounded-full
            bg-none bg-(--bg-dark) hover:bg-none
            shadow-(--shadow-inset-s)`,
                className || "") }
            onClick={ toggleTheme }
        >
            <Sun className={ `z-1 w-6` } />
            <Moon className={ `z-1 w-6` } />
            <div
                className={ `absolute top-1 left-0 size-7 bg-(image:--gradient-hover) rounded-full
                border-(--border-card) border-t-(--highlight) shadow-(--shadow-s)
                ${ theme === "light" ? "animate-slide-left" : "animate-slide-right" }` }
            ></div>
        </Button>
    )
}
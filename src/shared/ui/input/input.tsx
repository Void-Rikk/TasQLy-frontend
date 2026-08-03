import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

function Input({ className, ...props }: ComponentProps<"input">) {
    const baseStyles = `text-(--text) 
        bg-(image:--gradient)
        p-2
        text-sm
        shadow-(--shadow-s)
        rounded-xl
        outline-none
        ring-1 ring-transparent
        border-(--border-card) border-t-(--highlight)
        focus:ring-(--secondary)
        transition-all`;

    return <input
        className={ twMerge(baseStyles, className) }
        { ...props }
    />
}

export { Input };
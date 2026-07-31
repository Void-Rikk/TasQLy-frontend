import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

function Input({ className, ...props }: ComponentProps<"input">) {
    const baseStyles = `text-primary-foreground bg-muted
        p-2
        text-sm
        rounded-xl
        ring-3 ring-transparent
        border-1 border-muted-foreground
        focus:outline-none
        focus:border-primary-400
        focus:ring-primary-800
        transition-all`;

    return <input
        className={ twMerge(baseStyles, className) }
        { ...props }
    />
}

export { Input };
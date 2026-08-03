import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";


function Button({ className, children, ...props }: ComponentProps<"button">) {
    const baseStyles = `text-(--text)
            bg-(image:--gradient)
            border-(--border-card) border-t-(--highlight)
            rounded-xl px-6 py-2 
            shadow-(--shadow-s)
            hover:cursor-pointer hover:bg-(image:--gradient-hover)
            transition-all`;

    return <button
        className={ twMerge(baseStyles, className) }
        { ...props }
    >
        { children }
    </button>
}

export { Button };
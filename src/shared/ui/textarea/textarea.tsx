import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";


function Textarea({ className, ...props }: ComponentProps<"textarea">) {
    const baseStyles = `text-(--text) bg-(image:--gradient)
        p-2
        text-sm
        rounded-xl
        outline-none
        shadow-(--shadow-s)
        ring-1 ring-transparent
        border-(--border-card)
        focus:ring-(--secondary)
        resize-none
        transition-all`;

    return <textarea
        className={ twMerge(baseStyles, className) }
        { ...props }
    >

    </textarea>
}

export { Textarea };
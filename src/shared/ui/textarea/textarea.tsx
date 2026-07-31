import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";


function Textarea({ className, ...props }: ComponentProps<"textarea">) {
    const baseStyles = `text-primary-foreground bg-muted
        p-2
        text-sm
        rounded-xl
        ring-3 ring-transparent
        border-1 border-muted-foreground
        focus:outline-none
        focus:border-primary-400
        focus:ring-primary-800 resize-none
        transition-all`;

    return <textarea
        className={ twMerge(baseStyles, className) }
        { ...props }
    >

    </textarea>
}

export { Textarea };
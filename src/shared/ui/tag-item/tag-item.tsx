import { twMerge } from "tailwind-merge";
import type { ComponentPropsWithRef } from "react";


interface TagItemProps {
    name: string;
}

export function TagItem({ name, className, ...props }: TagItemProps & ComponentPropsWithRef<"span">) {

    return <span
        className={ twMerge(`text-(--text) text-xs tracking-wide font-mono
        bg-(image:--gradient-hover)
        p-1 px-2
        rounded-lg
        border
        border-(--border)
        hover:cursor-pointer
        transition-all
        `, className || "") }
        { ...props }
    >
        { name }
    </span>;
}
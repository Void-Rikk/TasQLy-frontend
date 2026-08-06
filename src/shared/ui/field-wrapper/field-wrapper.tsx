import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";


interface FieldWrapperProps {
    children: ReactNode;
    className?: string;
}

export function FieldWrapper({ children, className }: FieldWrapperProps) {

    return (
        <div
            className={ twMerge(`flex flex-col gap-1`, className || "")}
        >
            { children }
        </div>
    );
}
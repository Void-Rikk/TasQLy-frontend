import { twMerge } from "tailwind-merge";


interface OverlayProps {
    className?: string;
}

export function Overlay({ className }: OverlayProps) {

    return (
        <div
            className={ twMerge("absolute inset-0 rounded-xl bg-[rgba(0,0,0,0.25)] pointer-events-none", className || "") }
        >
        </div>
    );
}
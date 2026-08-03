import type { ReactNode } from "react";
import { Slot } from "radix-ui";
import { twMerge } from "tailwind-merge";

interface SkeletonProps {
    loading: boolean,
    children?: ReactNode,
    className?: string,
    width?: string | number,
    height?: string | number
}

export function Skeleton({ loading, children, width, height, className }: SkeletonProps) {
    if (!loading) {
        return children ? <Slot.Root>{children}</Slot.Root> : null;
    }

    if (children) {
        return (
            <span className="relative inline-block">
                <span className="invisible">{children}</span>
                <span
                    aria-hidden="true"
                    className={ twMerge(`absolute inset-0 animate-pulse shadow-(--shadow-s) rounded-md bg-linear-to-b from-gray-400 to-gray-500`, className)}
                />
            </span>
        );
    }

    return (
        <span
            aria-hidden="true"
            style={{ width, height }}
            className={ twMerge(`inline-block animate-pulse shadow-(--shadow-s) rounded-md bg-linear-to-b from-gray-400 to-gray-500`, className)}
        />
    );
}

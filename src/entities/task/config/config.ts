import type { TaskPriority } from "../model/types.ts";

type PriorityStyles = {
    shadow: string,
    bg: string,
}

export const styles: Record<TaskPriority, PriorityStyles> = {
    HIGH: {
        shadow: "shadow-(--glow-high)",
        bg: "bg-(--high)"
    },
    MEDIUM: {
        shadow: "shadow-(--glow-medium)",
        bg: "bg-(--medium)"
    },
    LOW: {
        shadow: "shadow-(--glow-low)",
        bg: "bg-(--low)"
    }
} as const;
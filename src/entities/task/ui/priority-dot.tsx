import type { TaskPriority } from "../model/types.ts";
import { styles } from "../config/config.ts";

interface PriorityDotProps {
    priority: TaskPriority;
}

export function PriorityDot({ priority }: PriorityDotProps) {

    return (
        <span
            className={ `inline-block size-2.5 min-w-2.5 rounded-full ${styles[priority].shadow} ${styles[priority].bg}` }
        >
        </span>
    );
}
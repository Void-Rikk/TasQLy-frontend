import type { TaskPriority } from "../model/types.ts";
import { styles } from "../config/config.ts";

interface PriorityLightProps {
    priority: TaskPriority;
}

export function PriorityLight({ priority }: PriorityLightProps) {

    return (
        <span
            className={ `absolute inline-block h-[80%] rounded-xl w-[2px] left-[1px] ${styles[priority].shadow} ${styles[priority].bg}` }
        >
        </span>
    );
}
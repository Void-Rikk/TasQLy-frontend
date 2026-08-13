import type { Task } from "../model/types.ts";
import type { ReactNode } from "react";
import { PriorityDot } from "./priority-dot.tsx";
import { TagItem } from "../../../shared/ui/tag-item";
import { PriorityLight } from "./priority-light.tsx";
import { Overlay } from "../../../shared/ui/overlay";
import { useMedia } from "../../../shared/lib/utils";
import { Status } from "./status.tsx";


interface TaskCardProps {
    task: Task;
    headerActions?: ReactNode;
    footerActions?: ReactNode;
}

export function TaskCard({ task, headerActions, footerActions }: TaskCardProps) {
    const isMobile = useMedia("width <= 768px");

    return (
        <div
            className={ `min-h-35 max-h-40 w-150
            p-4 flex flex-col gap-2 justify-between relative
            bg-(image:--gradient) rounded-xl 
            border-(--border-card) shadow-(--shadow-m) group animate-appearance
            max-md:w-full max-md:min-h-45 max-md:max-h-50` }
        >
            <header
                className={ `flex justify-between text-(--text) items-center 
                max-md:items-start max-md:gap-2 max-w-[99%]` }
            >
                <p
                    className={ `flex items-center gap-2.5 max-w-[80%]
                    ${task.status === "DONE" ? "line-through" : ""}
                    max-md:max-w-[90%]` }
                >
                    <PriorityDot
                        priority={ task.priority }
                    />
                    <span className={ `inline-block truncate` }>
                        { task.title }
                    </span>
                </p>
                { !isMobile &&
                    <Status
                        status={ task.status }
                        action={ headerActions }
                    />
                }
                { isMobile && headerActions }
            </header>
            <p
                className={ `text-(--text-muted) text-sm truncate w-[85%]` }
            >
                { task.description }
                { !task.description && <p aria-hidden="true" className={ `opacity-0` }>desc</p> }
            </p>
            <div
                className={ `flex flex-wrap gap-1.5 max-md:flex-nowrap max-md:overflow-hidden` }
            >
                { task.tags && task.tags.map(({ id, name }) => (
                    <TagItem
                        className={ `border-none border-(--border-card) shadow-(--shadow-s) hover:cursor-default` }
                        key={ id }
                        name={ name }
                    />
                )) }
                { task.tags && task.tags.length === 0 &&
                    <TagItem aria-hidden="true" className={ "opacity-0 hover:cursor-default" } name={"h"} /> }
            </div>
            <footer
                className={ `flex justify-end max-md:justify-between` }
            >
                { isMobile &&
                    <Status
                        status={ task.status }
                    />
                }
                { footerActions }
            </footer>
            <PriorityLight
                priority={ task.priority }
            />
            { task.status === "DONE" && <Overlay /> }
        </div>
    );
}
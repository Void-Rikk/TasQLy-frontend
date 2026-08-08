import type { Task } from "../model/types.ts";
import type { ReactNode } from "react";
import { PriorityDot } from "./priority-dot.tsx";
import { TagItem } from "../../../shared/ui/tag-item";
import { PriorityLight } from "./priority-light.tsx";


interface TaskCardProps {
    task: Task;
    headerActions?: ReactNode;
    footerActions?: ReactNode;
}

export function TaskCard({ task, headerActions, footerActions }: TaskCardProps) {

    return (
        <div
            className={ `p-4 flex flex-col gap-2 relative
            bg-(image:--gradient) rounded-xl 
            border-(--border-card) shadow-(--shadow-m)` }
        >
            <header
                className={ `flex justify-between text-(--text) items-center` }
            >
                <p
                    className={ `flex gap-2.5 items-center` }
                >
                    <PriorityDot
                        priority={ task.priority }
                    />
                    { task.title }
                </p>
                <div
                    className={ `flex gap-1 items-center` }
                >
                    <TagItem
                        name={ task.status } // ToDo: замапить текст
                        className={ `border-none border-(--border-card) shadow-(--shadow-m) hover:cursor-default` }
                    />
                    { headerActions }
                </div>
            </header>
            <p
                className={ `text-(--text-muted) text-sm truncate w-[90%]` }
            >
                { task.description }
            </p>
            <div
                className={ `flex flex-wrap gap-1.5` }
            >
                { task.tags.map(({ id, name }) => (
                    <TagItem
                        className={ `border-none border-(--border-card) shadow-(--shadow-s) hover:cursor-default` }
                        key={ id }
                        name={ name }
                    />
                )) }
            </div>
            <footer
                className={ `flex justify-end` }
            >
                { footerActions }
            </footer>
            <PriorityLight
                priority={ task.priority }
            />
        </div>
    );
}
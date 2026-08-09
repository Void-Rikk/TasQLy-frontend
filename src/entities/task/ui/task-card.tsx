import type { Task } from "../model/types.ts";
import type { ReactNode } from "react";
import { PriorityDot } from "./priority-dot.tsx";
import { TagItem } from "../../../shared/ui/tag-item";
import { PriorityLight } from "./priority-light.tsx";
import { useTranslation } from "react-i18next";
import { Overlay } from "../../../shared/ui/overlay";


interface TaskCardProps {
    task: Task;
    headerActions?: ReactNode;
    footerActions?: ReactNode;
}

export function TaskCard({ task, headerActions, footerActions }: TaskCardProps) {
    const { t } = useTranslation("home");

    return (
        <div
            className={ `min-h-35 max-h-40 w-150
            p-4 flex flex-col gap-2 justify-between relative
            bg-(image:--gradient) rounded-xl 
            border-(--border-card) shadow-(--shadow-m) group animate-appearance` }
        >
            <header
                className={ `flex justify-between text-(--text) items-center` }
            >
                <p
                    className={ `flex gap-2.5 items-center ${task.status === "DONE" ? "line-through" : ""}` }
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
                        name={ t(`taskStatus.${task.status}`) }
                        className={ `border-none border-(--border-card) shadow-(--shadow-m) hover:cursor-default` }
                    />
                    { headerActions }
                </div>
            </header>
            <p
                className={ `text-(--text-muted) text-sm truncate w-[85%]` }
            >
                { task.description }
                { !task.description && <p aria-hidden="true" className={ `opacity-0` }>desc</p> }
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
                { task.tags.length === 0 &&
                    <TagItem aria-hidden="true" className={ "opacity-0 hover:cursor-default" } name={"h"} /> }
            </div>
            <footer
                className={ `flex justify-end` }
            >
                { footerActions }
            </footer>
            <PriorityLight
                priority={ task.priority }
            />
            { task.status === "DONE" && <Overlay /> }
        </div>
    );
}
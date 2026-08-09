import { useTranslation } from "react-i18next";
import { TaskCard, useTasks } from "../../../entities/task";
import { DeleteTaskButton } from "../../../features/delete-task";
import { AdvanceTaskButton } from "../../../features/advance-task";
import { TasksSkeletons } from "./tasks-skeletons.tsx";


export function TasksSection() {

    const { data: tasksData, loading: loadingTasks } = useTasks();

    const { t } = useTranslation("home");

    return (
        <section
            className={ `flex flex-col gap-3 min-w-100` }
        >
            <header
                className={ `flex gap-2 text-(--text-muted) items-center` }
            >
                <span
                    className={ `min-w-fit` }
                >
                    { t("taskListHeader") }
                </span>
                <span
                    className={ `h-5 w-6 rounded-full text-xs
                    flex justify-center items-center
                    bg-(--bg-light) border-(--border-card)` }
                >
                    { tasksData ? tasksData.tasks.length : 0 }
                </span>
                <div
                    className={ `h-[1px] w-full rounded-xl
                    bg-linear-to-r from-(--text-muted) to-transparent to-80%` }
                >
                </div>
            </header>
            <ul
                className={ `list-none flex flex-col gap-3 w-150` }
            >
                { tasksData && tasksData.tasks.map(task => (
                    <li
                        key={ task.id }
                    >
                        <TaskCard
                            task={ task }
                            headerActions={
                            <DeleteTaskButton
                                id={ task.id }
                            /> }
                            footerActions={
                            <AdvanceTaskButton
                                id={ task.id }
                                status={ task.status }
                            /> }
                        />
                    </li>
                )) }
                { loadingTasks && <TasksSkeletons /> }
            </ul>
        </section>
    );
}
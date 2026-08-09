import { Header } from "../../../widgets/header";
import { TasksStatsPanel } from "../../../widgets/task-stats";
import { CreateTaskForm } from "../../../features/create-task";
import { ManageTagsPanel } from "../../../widgets/manage-tags";
import { TasksSection } from "../../../widgets/tasks-section";


function HomePage() {

    return (
        <div className={ `grid grid-cols-1 grid-rows-[50px_1fr] justify-items-center gap-16 pt-10 px-20` }>
            <Header />

            <div className={ `flex gap-6` }>
                <aside className={ `flex flex-col gap-4` }>
                    <TasksStatsPanel />
                    <CreateTaskForm />
                    <ManageTagsPanel />
                </aside>

                <main>
                    <TasksSection />
                </main>
            </div>
        </div>
    );
}

export { HomePage };
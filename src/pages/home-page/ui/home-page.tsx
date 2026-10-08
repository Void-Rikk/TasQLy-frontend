import { Header } from "../../../widgets/header";
import { TasksStatsPanel } from "../../../widgets/task-stats";
import { CreateTaskForm } from "../../../features/create-task";
import { ManageTagsPanel } from "../../../widgets/manage-tags";
import { TasksSection } from "../../../widgets/tasks-section";
import { ToggleThemeButton } from "../../../features/toggle-theme";
import { SwitchLocaleButton } from "../../../features/switch-locale";
import { LogoutButton } from "../../../features/logout";
import { FilterStatusPanel } from "../../../features/filter-task-by-status";
import { SearchTaskPanel } from "../../../features/search-task";


function HomePage() {

    return (
        <div className={ `grid grid-cols-1 grid-rows-[80px_1fr] justify-items-center gap-16 pt-10 px-20
        max-md:px-5 max-md:pt-5 max-md:gap-10` }>

            <div
                className={ `flex flex-col items-end gap-2 absolute top-5 right-5` }
            >
                <LogoutButton />
                <ToggleThemeButton />
                <SwitchLocaleButton />
            </div>

            <Header />

            <div className={ `flex gap-6 max-md:flex-col max-md:w-full` }>
                <aside className={ `flex flex-col gap-4` }>
                    <TasksStatsPanel />
                    <CreateTaskForm />
                    <ManageTagsPanel />
                    <FilterStatusPanel />
                </aside>

                <main
                    className={ `flex flex-col gap-2` }
                >
                    <SearchTaskPanel />
                    <TasksSection />
                </main>
            </div>
        </div>
    );
}

export { HomePage };
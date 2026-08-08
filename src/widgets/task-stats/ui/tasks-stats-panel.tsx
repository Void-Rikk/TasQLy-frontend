import { useTasks } from "../../../entities/task";
import { calculateTaskStats } from "../../../entities/task";
import { Skeleton } from "../../../shared/ui/skeleton";
import { StatItem } from "../../../shared/ui/stat-item";
import { useTranslation } from "react-i18next";


const statsColor = {
    totalTasks: "gray",
    activeTasks: "purple",
    doneTasks: "green",
} as const;

export function TasksStatsPanel() {
    const { data, loading } = useTasks();
    const { t } = useTranslation("home");

    const stats = calculateTaskStats(data ? data.tasks : []);

    return (
        <div className="flex gap-2">
            { Object.entries(stats).map(([label, value]) => (
                <Skeleton
                    loading={ loading }
                    key={ label }
                >
                    <StatItem
                        label={ t(`stats.${label}`) }
                        value={ value }
                        color={ statsColor[label] }
                    />
                </Skeleton>
            )) }
        </div>
    );
}
import { useTasks } from "../../../entities/task";
import { calculateTaskStats } from "../../../entities/task";
import { StatItem } from "../../../shared/ui/stat-item";
import { useTranslation } from "react-i18next";


const statsColor = {
    totalTasks: "gray",
    activeTasks: "purple",
    doneTasks: "green",
} as const;

export function TasksStatsPanel() {
    const { data } = useTasks();
    const { t } = useTranslation("home");

    const stats = calculateTaskStats(data ? data.tasks : []);

    return (
        <div className={ `flex gap-2 animate-appearance max-md:flex-col` }>
            { Object.entries(stats).map(([label, value]) => (
                <StatItem
                    key={ label }
                    label={ t(`stats.${label}`) }
                    value={ value }
                    color={ statsColor[label as keyof typeof statsColor] }
                />
            )) }
        </div>
    );
}
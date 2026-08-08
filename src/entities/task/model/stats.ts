import type { Task } from "./types.ts";


export type TaskStats = {
    totalTasks: number,
    activeTasks: number,
    doneTasks: number
}

export function calculateTaskStats(tasks: Task[]): TaskStats {
    const stats = { totalTasks: 0, activeTasks: 0, doneTasks: 0 } satisfies TaskStats;

    for (const task of tasks) {
        stats.totalTasks++;
        if (task.status === "DONE") {
            stats.doneTasks++;
        }
        else {
            stats.activeTasks++;
        }
    }

    return stats;
}

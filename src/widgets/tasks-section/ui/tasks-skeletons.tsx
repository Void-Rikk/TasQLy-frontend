import { Skeleton } from "../../../shared/ui/skeleton";
import { type Task, TaskCard } from "../../../entities/task";


export function TasksSkeletons() {
    const ids = ["fjdhskfgncjv", "vmcxouor", "jcviojvoijcpx"];
    const fillerTask: Task = {
        id: "qpweoru",
        title: "filler",
        description: "filler",
        priority: "LOW",
        status: "TO_DO",
        tags: []
    }

    return (
        <>
            {
                ids.map(id => (
                    <Skeleton
                        key={ id }
                        loading={ true }
                    >
                        <TaskCard
                            task={ fillerTask }
                        />
                    </Skeleton>
                ))
            }
        </>
    );
}
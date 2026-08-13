import { Button } from "../../../shared/ui/button";
import { type TaskStatus, useAdvanceTask } from "../../../entities/task";
import { useTranslation } from "react-i18next";
import { MoveRight } from "lucide-react";
import toast from "react-hot-toast";


interface AdvanceTaskButtonProps {
    id: string;
    status: TaskStatus;
}

export function AdvanceTaskButton({ id, status }: AdvanceTaskButtonProps) {
    const [advanceTask, { loading: advancingTask }] = useAdvanceTask();

    const { t } = useTranslation("home");

    const onAdvance = () => {
        const promiseForToast = advanceTask({
            variables: {
                id
            }
        });

        toast.promise(promiseForToast, {
            success: t("advanceTaskStatus.success"),
            error: t("advanceTaskStatus.error"),
            loading: t("advanceTaskStatus.loading"),
        })
    }

    return (
        <Button
            className={ `flex gap-1 items-center
            py-0 px-2
            text-xs text-(--text-muted) hover:text-(--text) max-md:text-(--text)` }
            onClick={ onAdvance }
            disabled={ advancingTask || status === "DONE" }
        >
            { t("taskAdvanceButton") }
            <MoveRight
                className={ `w-3` }
            />
        </Button>
    );
}
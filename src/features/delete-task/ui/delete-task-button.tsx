import { useDeleteTask } from "../../../entities/task";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { ConfirmTaskDeletionModal } from "./confirm-task-deletion-modal.tsx";


interface DeleteTaskButtonProps {
    id: string;
    taskName: string;
}

export function DeleteTaskButton({ id, taskName }: DeleteTaskButtonProps ) {
    const [deleteTask, { loading: deletingTask }] = useDeleteTask();

    const { t } = useTranslation("home");

    const onDelete = () => {
        const promiseForToast = deleteTask({
            variables: {
                id
            }
        });

        toast.promise(promiseForToast, {
            loading: t("deleteTaskStatus.loading"),
            error: t("deleteTaskStatus.error"),
            success: t("deleteTaskStatus.success")
        })
    }

    return (
        // <Button
        //     className={ `opacity-0 p-1 size-6 flex justify-center items-center group-hover:opacity-100
        //     max-md:opacity-100` }
        //     onClick={ onDelete }
        //     disabled={ deletingTask }
        // >
        //     <X
        //         className={ `text-(--danger) size-full` }
        //     />
        // </Button>
        <ConfirmTaskDeletionModal
            taskName={ taskName }
            onDelete={ onDelete }
            isDeleting={ deletingTask }
        />
    );
}
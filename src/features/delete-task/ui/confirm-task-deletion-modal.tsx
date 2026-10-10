import { Dialog, DialogContent, DialogTrigger } from "../../../shared/ui/dialog";
import { X } from "lucide-react";
import { Button } from "../../../shared/ui/button";
import { useTranslation } from "react-i18next";


interface ConfirmTaskDeletionModalProps {
    taskName: string;
    onDelete: () => void;
    isDeleting: boolean;
}

export function ConfirmTaskDeletionModal({ taskName, onDelete, isDeleting }: ConfirmTaskDeletionModalProps) {
    const { t } = useTranslation("home");

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    className={ `opacity-0 p-1 size-6 flex justify-center 
                    items-center group-hover:opacity-100
                    max-md:opacity-100` }
                >
                    <X
                        className={ `text-(--danger) size-full` }
                    />
                </Button>
            </DialogTrigger>
            <DialogContent
                className={ `flex flex-col gap-4` }
            >
                <h3
                    className={ `text-(--text) text-xl` }
                >
                    { t("deleteTask.message") }
                </h3>
                <p
                    className={ `text-(--text-muted)` }
                >
                    { t("deleteTask.taskName") }: { taskName }
                </p>
                <Button
                    className={ `bg-none hover:bg-none bg-red-600 uppercase font-mono
                    hover:bg-red-600/85` }
                    onClick={ onDelete }
                    disabled={ isDeleting }
                >
                    { t("deleteTask.button") }
                </Button>
            </DialogContent>
        </Dialog>
    );
}
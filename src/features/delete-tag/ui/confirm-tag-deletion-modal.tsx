import { Dialog, DialogContent, DialogTrigger } from "../../../shared/ui/dialog";
import { X } from "lucide-react";
import { Button } from "../../../shared/ui/button";
import { useTranslation } from "react-i18next";


interface ConfirmTagDeletionModalProps {
    id: string;
    tagName: string;
    onDelete: (id: string) => void;
}

export function ConfirmTagDeletionModal({ id, tagName, onDelete }: ConfirmTagDeletionModalProps) {
    const { t } = useTranslation("home");

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    className="p-1 size-6 flex justify-center items-center"
                >
                    <X
                        className="text-(--danger)"
                    />
                </Button>
            </DialogTrigger>
            <DialogContent
                className={ `flex flex-col gap-4` }
            >
                <h3
                    className={ `text-(--text) text-xl` }
                >
                    { t("deleteTag.message") }
                </h3>
                <p
                    className={ `text-(--text-muted)` }
                >
                    { t("deleteTag.tagName") }: { tagName }
                </p>
                <Button
                    className={ `bg-none hover:bg-none bg-red-600 uppercase font-mono
                    hover:bg-red-600/85` }
                    onClick={ () => onDelete(id) }
                >
                    { t("deleteTag.button") }
                </Button>
            </DialogContent>
        </Dialog>
    );
}
import { TagItem } from "../../../shared/ui/tag-item";
import { ConfirmTagDeletionModal } from "./confirm-tag-deletion-modal.tsx";


interface DeleteTagListItemProps {
    id: string;
    name: string;
    onDelete: (id: string) => void;
}

export function DeleteTagListItem({ id, name, onDelete }: DeleteTagListItemProps) {

    return (
        <div
            className="flex items-center gap-1"
        >
            <TagItem
                className="self-center hover:cursor-default"
                name={ name }
            />
            <ConfirmTagDeletionModal
                id={ id }
                onDelete={ () => onDelete(id) }
                tagName={ name }
            />
        </div>
    );
}
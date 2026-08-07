import { TagItem } from "../../../shared/ui/tag-item";
import { Button } from "../../../shared/ui/button";
import { X } from "lucide-react";


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
            <Button
                className="p-1 size-6 flex justify-center items-center"
                onClick={ () => onDelete(id) }
            >
                <X
                    className="text-(--danger)"
                />
            </Button>
        </div>
    );
}
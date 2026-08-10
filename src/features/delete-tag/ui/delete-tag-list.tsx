import { Separator } from "../../../shared/ui/separator";
import { type Tag, useDeleteTag } from "../../../entities/tag";
import { DeleteTagListItem } from "./delete-tag-list-item.tsx";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";


interface DeleteTagListProps {
    tags: Tag[];
}

export function DeleteTagList({ tags }: DeleteTagListProps) {

    const [deleteTag] = useDeleteTag();

    const { t } = useTranslation("home");

    const onTagDelete = (id: string) => {

        const promiseForToast = deleteTag({
            variables: {
                id
            }
        });

        toast.promise(promiseForToast, {
            loading: t("manageTagsSection.deleteLoading"),
            success: t("manageTagsSection.deleteSuccess"),
            error: t("manageTagsSection.deleteError")
        });
    }

    return (
        <>
            <Separator />
            <div className="p-4 flex flex-wrap gap-2 max-w-80">
                {
                    tags.map(({ id, name }) => (
                        <DeleteTagListItem
                            key={ id }
                            id={ id }
                            name={ name }
                            onDelete={ onTagDelete }
                        />
                    ))
                }
            </div>
        </>
    );
}
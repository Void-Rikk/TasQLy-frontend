import { useTranslation } from "react-i18next";
import { TagPicker, useTags } from "../../../entities/tag";
import { useSetTasksFiltersTagIds, useTasksFiltersTagIds } from "../../../entities/task";
import { LoaderCircle } from "lucide-react";


export function FilterTagsPanel() {
    const { t } = useTranslation("home");

    const tagIds = useTasksFiltersTagIds();
    const setTagIds = useSetTasksFiltersTagIds();

    const { data: tagsData, loading: tagsLoading } = useTags();

    const handleChangeTags = (tagId: string) => {
        setTagIds(tagId);
    }

    return (
        <div
            className={ `flex flex-col gap-2 p-4
            bg-(image:--gradient)
            border-(--border-card) border-t-(--highlight)
            rounded-xl shadow-(--shadow-s)
            animate-appearance` }
        >
            <h3
                className={ `text-(--text-muted) font-mono uppercase tracking-wider text-sm` }
            >
                { t("tagFilterSection.header") }
            </h3>
            { tagsLoading && (
                <p className="flex gap-2 items-center text-(--text)">
                    <LoaderCircle
                        className="size-4 animate-spin"
                    />
                    { t("newTaskSection.tagsLoading") }
                </p>
            ) }
            <div className="flex gap-1 flex-wrap max-w-70">
                <TagPicker
                    tags={ tagsData ? tagsData.tags : [] }
                    tagsState={ tagIds }
                    setTags={ handleChangeTags }
                />
            </div>
        </div>
    );
}
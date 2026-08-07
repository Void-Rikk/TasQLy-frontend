import { ExpanseButton } from "../../../shared/ui/expanse-button";
import { useState } from "react";
import { LoaderCircle, Settings } from "lucide-react";
import { useTranslation } from "react-i18next";
import { CreateTagForm } from "../../../features/create-tag";
import { DeleteTagList } from "../../../features/delete-tag";
import { useTags } from "../../../entities/tag";


export function ManageTagsPanel() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { t } = useTranslation("home");

    const { data: tagsData, loading: tagsLoading } = useTags();

    return (
        <section
            className={ `
            bg-(image:--gradient)
            border-(--border-card) border-t-(--highlight)
            rounded-xl
            shadow-(--shadow-s)
            animate-appearance
            w-80` }
        >
            <ExpanseButton
                isOpen={ isOpen }
                setIsOpen={ setIsOpen }
                content={<>
                    <Settings
                        className={ 'size-5 text-(--primary) rounded-md bg-(--bg-light) shadow-(--shadow-s)' }
                    />
                    <p>{ t("manageTagsSection.header") }</p>
                </>}
            />
            { isOpen &&
                <>
                    <CreateTagForm />
                    <DeleteTagList
                        tags={ tagsData ? tagsData.tags : [] }
                    />
                    {
                        tagsLoading &&
                        <p className={"flex gap-2 items-center text-(--text) pl-4 pb-4"}>
                            <LoaderCircle className="size-4 animate-spin" />
                            { t("manageTagsSection.tagsLoading") }
                        </p>
                    }
                </>
            }
        </section>
    );
}
import { FieldWrapper } from "../../../shared/ui/field-wrapper";
import { Label } from "../../../shared/ui/label";
import { Checkbox } from "../../../shared/ui/checkbox";
import { TagItem } from "../../../shared/ui/tag-item";
import type { Tag } from "../../../entities/tag";
import { useTranslation } from "react-i18next";
import { LoaderCircle } from "lucide-react";


interface TagsFieldProps {
    tagsState: Set<string>;
    setTags: (tagName: string) => void;
    tags: Tag[];
    tagsLoading: boolean;
}

export function TagsField({ tagsState, setTags, tags, tagsLoading }: TagsFieldProps) {
    const { t } = useTranslation("home");

    return (
        <FieldWrapper>
            <div
                className="flex gap-2 items-center"
            >
                <Label
                    className="uppercase"
                >
                    { t("newTaskSection.tagsLabel") }
                </Label>
            </div>
            <div className="flex gap-1 flex-wrap max-w-70">
                { tagsLoading && <p className="flex gap-2 items-center text-(--text)"><LoaderCircle className="size-4 animate-spin" />{ t("newTaskSection.tagsLoading") }</p> }
                { tags.map(({ id, name }) => (
                    <Checkbox
                        key={ id }
                        asChild={ true }
                        onCheckedChange={ () => setTags(id) }
                        value={ name }
                    >
                        <TagItem name={ name }
                                 className={ `${ !tagsState.has(id) ? "bg-none text-(--text-muted)" : "shadow-(--shadow-m) border-(--primary)" }` }
                        />
                    </Checkbox>
                )) }
            </div>
        </FieldWrapper>
    );
}
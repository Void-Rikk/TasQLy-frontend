import type { Tag } from "../model/types.ts";
import { Checkbox } from "../../../shared/ui/checkbox";
import { TagItem } from "../../../shared/ui/tag-item";


interface TagPickerProps {
    tags: Tag[];
    tagsState: Set<string>;
    setTags: (tagName: string) => void;
}

export function TagPicker({ tags, tagsState, setTags }: TagPickerProps) {

    return (
        <>
            { tags.map(({ id, name }) => (
                <Checkbox
                    key={ id }
                    asChild={ true }
                    onCheckedChange={ () => setTags(id) }
                    value={ name }
                >
                    <TagItem
                        name={ name }
                        className={ `${ !tagsState.has(id)
                            ? "bg-none text-(--text-muted)"
                            : "shadow-(--shadow-m) border-(--primary)" }` }
                    />
                </Checkbox>
            )) }
        </>
    );
}
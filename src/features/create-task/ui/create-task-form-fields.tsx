import type { CreateTaskForm, CreateTaskFormSetters } from "../lib/types.ts";
import type { Tag } from "../../../entities/tag";
import { TitleField } from "./title-field.tsx";
import { DescriptionField } from "./description-field.tsx";
import { PriorityField } from "./priority-field.tsx";
import { TagsField } from "./tags-field.tsx";


interface CreateTaskFormFieldsProps {
    form: CreateTaskForm;
    setters: CreateTaskFormSetters;
    tags: Tag[];
    tagsLoading: boolean;
}

export function CreateTaskFormFields({ form, setters, tags, tagsLoading }: CreateTaskFormFieldsProps) {

    return (
        <>
            <TitleField
                title={ form.title }
                setTitle={ setters.setTitle }
            />
            <DescriptionField
                description={ form.description }
                setDescription={ setters.setDescription }
            />
            <PriorityField
                priority={ form.priority }
                setPriority={ setters.setPriority }
            />
            <TagsField
                tagsState={ form.tags }
                setTags={ setters.setTags }
                tags={ tags }
                tagsLoading={ tagsLoading }
            />
        </>
    );
}
import type { CreateTagForm, CreateTagFormSetters } from "../lib/types.ts";
import { NameField } from "./name-field.tsx";

interface CreateTagFormFieldsProps {
    form: CreateTagForm,
    setters: CreateTagFormSetters,
}

export function CreateTagFormFields({ form, setters }: CreateTagFormFieldsProps) {

    return (
        <>
            <NameField
                name={ form.name }
                setName={ setters.setName }
            />
        </>
    );
}
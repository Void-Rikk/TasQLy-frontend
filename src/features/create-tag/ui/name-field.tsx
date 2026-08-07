import type { Dispatch, SetStateAction } from "react";
import { FieldWrapper } from "../../../shared/ui/field-wrapper";
import { Label } from "../../../shared/ui/label";
import { Input } from "../../../shared/ui/input";
import { useTranslation } from "react-i18next";


interface NameFieldProps {
    name: string;
    setName: Dispatch<SetStateAction<string>>;
}

export function NameField({ name, setName }: NameFieldProps) {
    const { t } = useTranslation("home");

    return (
        <FieldWrapper>
            <Label
                className="uppercase"
                htmlFor={ "nameField" }
            >
                { t("manageTagsSection.nameLabel") }
            </Label>
            <Input
                id={"nameField"}
                className="bg-none bg-(--bg-light) shadow-(--shadow-m)"
                value={ name }
                onChange={ (e) => setName(e.target.value) }
                placeholder={ t("manageTagsSection.namePlaceholder") }
                required
            />
        </FieldWrapper>
    );
}
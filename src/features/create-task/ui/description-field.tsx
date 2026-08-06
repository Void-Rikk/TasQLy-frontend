import { FieldWrapper } from "../../../shared/ui/field-wrapper";
import { Label } from "../../../shared/ui/label";
import { Textarea } from "../../../shared/ui/textarea";
import { useTranslation } from "react-i18next";
import type { Dispatch, SetStateAction } from "react";


interface DescriptionFieldProps {
    description: string;
    setDescription: Dispatch<SetStateAction<string>>;
}

export function DescriptionField({ description, setDescription }: DescriptionFieldProps) {
    const { t } = useTranslation("home");

    return (
        <FieldWrapper>
            <Label
                htmlFor="desc"
                className="uppercase "
            >
                { t("newTaskSection.descriptionLabel") }
            </Label>
            <Textarea
                id="desc"
                className="bg-none bg-(--bg-light) shadow-(--shadow-m)"
                placeholder={ t("newTaskSection.descriptionPlaceholder") }
                onChange={(e) => setDescription(e.target.value)}
                value={ description }
            />
        </FieldWrapper>
    );
}
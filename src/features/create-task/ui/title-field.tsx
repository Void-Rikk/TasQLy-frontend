import { FieldWrapper } from "../../../shared/ui/field-wrapper";
import { Label } from "../../../shared/ui/label";
import { Input } from "../../../shared/ui/input";
import { useTranslation } from "react-i18next";


interface TitleFieldProps {
    title: string;
    setTitle: (newTitle: string) => void;
}

export function TitleField({ title, setTitle }: TitleFieldProps) {
    const { t } = useTranslation("home");

    return (
        <FieldWrapper>
            <Label
                htmlFor="title"
                className="uppercase"
            >
                { t("newTaskSection.titleLabel") }*
            </Label>
            <Input
                id="title"
                className="bg-none bg-(--bg-light) shadow-(--shadow-m)"
                placeholder={ t( "newTaskSection.titlePlaceholder") }
                onChange={(e) => setTitle(e.target.value)}
                value={ title }
                required
            />
        </FieldWrapper>
    );
}
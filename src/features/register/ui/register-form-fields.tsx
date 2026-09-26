import { FieldWrapper } from "../../../shared/ui/field-wrapper";
import { Input } from "../../../shared/ui/input";
import { Label } from "../../../shared/ui/label";
import { useTranslation } from "react-i18next";


interface RegisterFormFieldsProps {
    email: string;
    password: string;
    confirmPassword: string;
    name: string;

    onEmailChange: (newEmail: string) => void;
    onNameChange: (newName: string) => void;
    onPasswordChange: (newPassword: string) => void;
    onConfirmPasswordChange: (newConfirmPassword: string) => void;
}

export function RegisterFormFields({
    email,
    password,
    confirmPassword,
    name,
    onEmailChange,
    onNameChange,
    onPasswordChange,
    onConfirmPasswordChange
}: RegisterFormFieldsProps) {
    const { t } = useTranslation("auth");

    return (
        <>
            <FieldWrapper>
                <Label
                    htmlFor="register-form-name"
                >
                    { t("labels.name") }
                </Label>

                <Input
                    id="register-form-name"
                    className={ `bg-none bg-(--bg-light) shadow-(--shadow-m)` }
                    value={ name }
                    onChange={ (e) => onNameChange(e.target.value) }
                    placeholder={ t("placeholders.name") }
                />
            </FieldWrapper>

            <FieldWrapper>
                <Label
                    htmlFor="register-form-email"
                >
                    { t("labels.email") }
                </Label>

                <Input
                    id="register-form-email"
                    className={ `bg-none bg-(--bg-light) shadow-(--shadow-m)` }
                    value={ email }
                    onChange={ (e) => onEmailChange(e.target.value) }
                    placeholder={ t("placeholders.email") }
                />
            </FieldWrapper>

            <FieldWrapper>
                <Label
                    htmlFor="register-form-password"
                >
                    { t("labels.password") }
                </Label>

                <Input
                    id="register-form-password"
                    className={ `bg-none bg-(--bg-light) shadow-(--shadow-m)` }
                    type="password"
                    value={ password }
                    onChange={ (e) => onPasswordChange(e.target.value) }
                    placeholder={ t("placeholders.password") }
                />
            </FieldWrapper>

            <FieldWrapper>
                <Label
                    htmlFor="register-form-confirm-password"
                >
                    { t("labels.confirmPassword") }
                </Label>

                <Input
                    id="register-form-confirm-password"
                    className={ `bg-none bg-(--bg-light) shadow-(--shadow-m)` }
                    type="password"
                    value={ confirmPassword }
                    onChange={ (e) => onConfirmPasswordChange(e.target.value) }
                    placeholder={ t("placeholders.confirmPassword") }
                />
            </FieldWrapper>
        </>
    );
}
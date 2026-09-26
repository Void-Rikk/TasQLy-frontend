import { FieldWrapper } from "../../../shared/ui/field-wrapper";
import { Label } from "../../../shared/ui/label";
import { Input } from "../../../shared/ui/input";
import { useTranslation } from "react-i18next";


interface LoginFormFieldsProps {
    email: string;
    onEmailChange: (newEmail: string) => void;
    password: string;
    onPasswordChange: (newPassword: string) => void;
}

export function LoginFormFields({ email, onEmailChange, onPasswordChange, password }: LoginFormFieldsProps) {
    const { t } = useTranslation("auth");

    return (
        <>
            <FieldWrapper>
                <Label
                    htmlFor="login-form-email"
                >
                    { t("labels.email") }
                </Label>
                <Input
                    id={"login-form-email"}
                    className={ `bg-none bg-(--bg-light) shadow-(--shadow-m)` }
                    placeholder={ t("placeholders.email") }
                    value={ email }
                    type="email"
                    onChange={ (e) => onEmailChange(e.target.value) }
                />
            </FieldWrapper>

            <FieldWrapper>
                <Label
                    htmlFor="login-form-password"
                >
                    { t("labels.password") }
                </Label>
                <Input
                    id="login-form-password"
                    className={ `bg-none bg-(--bg-light) shadow-(--shadow-m)` }
                    type="password"
                    placeholder={ t("placeholders.password") }
                    value={ password }
                    onChange={ (e) => onPasswordChange(e.target.value) }
                />
            </FieldWrapper>
        </>
    );
}
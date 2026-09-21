import { useRegisterForm } from "../model/hooks.ts";
import { RegisterFormFields } from "./register-form-fields.tsx";
import {
    changeConfirmPasswordAction,
    changeEmailAction,
    changeNameAction,
    changePasswordAction
} from "../model/action-creators.ts";
import { Button } from "../../../shared/ui/button";
import { useTranslation } from "react-i18next";
import { useRegister } from "../../../entities/user";
import type { SubmitEventHandler } from "react";
import { registerValidationSchema } from "../model/validation.ts";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";


export function RegisterForm() {
    const [form, dispatch] = useRegisterForm();

    const { t } = useTranslation("auth");

    const [register, { loading }] = useRegister();

    const navigate = useNavigate();

    const handleEmailChange = (newEmail: string) =>
        dispatch(changeEmailAction(newEmail));

    const handleNameChange = (newName: string) =>
        dispatch(changeNameAction(newName));

    const handlePasswordChange = (newPassword: string) =>
        dispatch(changePasswordAction(newPassword));

    const handleConfirmPasswordChange = (newConfirmPassword: string) =>
        dispatch(changeConfirmPasswordAction(newConfirmPassword));

    const handleSubmit: SubmitEventHandler = async (e) => {
        e.preventDefault();

        if (form.password !== form.confirmPassword) {
            toast.error(t("toast.passwordNotConfirmed"));
        }

        const inputsData = {
            email: form.email,
            password: form.password,
            name: form.name,
        };

        const validationResult = registerValidationSchema.safeParse(inputsData);

        if (!validationResult.success) {
            toast.error(t("toast.invalidInput"));
        }

        const registerPromise = register({
            variables: {
                input: {
                    ...inputsData,
                }
            }
        });

        toast.promise(registerPromise, {
            loading: t("toast.registering"),
            success: t("toast.registerSuccess"),
            error: t("toast.registerError")
        });

        await registerPromise;

        navigate("/");
    }

    return (
        <form
            onSubmit={ handleSubmit }
        >
            <RegisterFormFields
                email={ form.email }
                password={ form.password }
                confirmPassword={ form.confirmPassword }
                name={ form.name }
                onEmailChange={ handleEmailChange }
                onNameChange={ handleNameChange }
                onPasswordChange={ handlePasswordChange }
                onConfirmPasswordChange={ handleConfirmPasswordChange }
            />
            <Button
                className={ `uppercase bg-none 
                ${ loading && "animate-pulse" }
                bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 
                hover:bg-none hover:bg-linear-to-r hover:from-blue-500 hover:via-blue-600 hover:to-blue-700` }
                type="submit"
                disabled={ loading }
            >
                { t("registerButton") }
            </Button>
        </form>
    );
}
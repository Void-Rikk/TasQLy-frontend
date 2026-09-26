import { useAuthLogin, useLoginForm } from "../model/hooks.ts";
import { LoginFormFields } from "./login-form-fields.tsx";
import { changeEmailAction, changePasswordAction } from "../model/action-creators.ts";
import type { SubmitEventHandler } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { Button } from "../../../shared/ui/button";
import { loginValidationSchema } from "../model/validation.ts";


export function LoginForm() {
    const [loginForm, dispatch] = useLoginForm();

    const [login, { loading }] = useAuthLogin();

    const { t } = useTranslation("auth");

    const navigate = useNavigate();

    const handleEmailChange = (newEmail: string) =>
        dispatch(changeEmailAction(newEmail));

    const handlePasswordChange = (newPassword: string) =>
        dispatch(changePasswordAction(newPassword));

    const handleSubmit: SubmitEventHandler = async (e) => {
        e.preventDefault();

        const inputsData = {
            email: loginForm.email,
            password: loginForm.password,
        };

        const validationResult = loginValidationSchema.safeParse(inputsData);

        if (!validationResult.success) {
            toast.error(t("toast.invalidInput"));
        }

        const loginPromise = login({
            variables: {
                input: {
                    ...inputsData,
                }
            }
        });

        toast.promise(loginPromise, {
            loading: t("toast.logging"),
            success: t("toast.loginSuccess"),
            error: t("toast.loginError")
        });

        await loginPromise;

        navigate("/");
    }

    return (
        <form
            onSubmit={ handleSubmit }
            className={ `flex flex-col gap-4` }
        >
            <LoginFormFields
                email={ loginForm.email }
                password={ loginForm.password }
                onEmailChange={ handleEmailChange }
                onPasswordChange={ handlePasswordChange }
            />
            <Button
                className={ `uppercase bg-none
                ${ loading && "animate-pulse" }
                bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 
                hover:bg-none hover:bg-linear-to-r hover:from-blue-500 hover:via-blue-600 hover:to-blue-700` }
                type="submit"
                disabled={ loading }
            >
                { t("loginButton") }
            </Button>
        </form>
    );
}
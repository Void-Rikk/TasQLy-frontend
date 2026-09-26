import { AuthForm } from "../../../widgets/auth-form";
import { SwitchLocaleButton } from "../../../features/switch-locale";
import { ToggleThemeButton } from "../../../features/toggle-theme/ui/toggle-theme-button.tsx";


export function AuthPage() {

    return (
        <div
            className={ `flex justify-center mt-[20vh]` }
        >
            <ToggleThemeButton
                className={ `absolute top-5 right-5` }
            />
            <SwitchLocaleButton
                className={ `absolute top-16 right-5` }
            />
            <AuthForm />
        </div>
    );
}
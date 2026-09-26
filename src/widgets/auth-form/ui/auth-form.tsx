import { useState } from "react";
import { AuthFormSwitcher } from "./auth-form-switcher.tsx";
import { LoginForm } from "../../../features/login";
import { RegisterForm } from "../../../features/register";
import Logo from "../../../shared/ui/icons/GraphQL.png";


export function AuthForm() {
    const [activeTab, setActiveTab] = useState<string>("login");

    return (
        <section
            className={ `bg-(image:--gradient) p-6 border-(--border-card) shadow-(--shadow-l) rounded-lg
            flex flex-col gap-4 min-w-[30vw]` }
        >
            <h2
                className={ `text-(--text) text-2xl font-semibold uppercase
                flex gap-2 items-center self-center` }
            >
                <img
                    src={ Logo }
                    alt={ "Logo" }
                    width={ 40 }
                />
                tasqly
            </h2>
            <AuthFormSwitcher
                activeTab={ activeTab }
                setActiveTab={ setActiveTab }
            />
            { activeTab === "login"
                ? <LoginForm />
                : <RegisterForm />
            }
        </section>
    );
}
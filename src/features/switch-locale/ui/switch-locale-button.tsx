import { useTranslation } from "react-i18next";
import { Button } from "../../../shared/ui/button";
import { twMerge } from "tailwind-merge";
import { switchLocale } from "../model/switch-locale.ts";


interface SwitchLocaleButtonProps {
    className?: string;
}

export function SwitchLocaleButton({ className }: SwitchLocaleButtonProps) {
    const { i18n } = useTranslation();

    return (
        <Button
            onClick={ () => switchLocale(i18n) }
            className={ twMerge(`relative flex justify-center gap-2 font-mono text-sm rounded-sm p-1
            bg-none bg-(--bg-dark) hover:bg-none
            shadow-(--shadow-inset-s)`,
                className || "") }
        >
            <span
                className={ `p-0.5 rounded-sm ${ i18n.language === "ru" ? "bg-(--bg) shadow-(--shadow-m)" : "" } transition-all` }
            >
                ru
            </span>
            <span
                className={ `p-0.5 rounded-sm ${ i18n.language === "en" ? "bg-(--bg) shadow-(--shadow-m)" : "" } transition-all` }
            >
                en
            </span>
        </Button>
    );
}
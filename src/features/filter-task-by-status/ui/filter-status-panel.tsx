import { useTranslation } from "react-i18next";
import { StatusTabs } from "./status-tabs.tsx";


export function FilterStatusPanel() {
    const { t } = useTranslation("home");

    return (
        <div
            className={ `flex flex-col gap-2 p-4
            bg-(image:--gradient)
            border-(--border-card) border-t-(--highlight)
            rounded-xl shadow-(--shadow-s)
            animate-appearance` }
        >
            <h3
                className={ `text-(--text-muted) font-mono uppercase tracking-wider text-sm` }
            >
                { t("statusFilterSection.header") }
            </h3>
            <StatusTabs />
        </div>
    );
}
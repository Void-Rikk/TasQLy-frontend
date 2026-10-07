import { Tabs } from "../../../shared/ui/tabs";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import { useSetTasksFiltersStatus, useTasksFiltersStatus } from "../../../entities/task";

export function StatusTabs() {
    const { t } = useTranslation("home");

    const tabs = useMemo(() => [
        { id: "ALL", displayName: t("statusFilterSection.allTasksOption") },
        { id: "TO_DO", displayName: t("statusFilterSection.toDoOption") },
        { id: "IN_PROGRESS", displayName: t("statusFilterSection.inProgressOption") },
        { id: "DONE", displayName: t("statusFilterSection.doneOption") }
    ], [t]);

    const activeTab = useTasksFiltersStatus();

    const setActiveTab = useSetTasksFiltersStatus();

    return (
        <Tabs
            tabs={ tabs }
            activeTab={ activeTab }
            setActiveTab={ setActiveTab }
            className={ `flex-col font-mono text-sm` }
        />
    );
}
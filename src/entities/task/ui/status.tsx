import { TagItem } from "../../../shared/ui/tag-item";
import { useTranslation } from "react-i18next";
import type { ReactNode } from "react";


interface StatusProps {
    status: string;
    action?: ReactNode;
}

export function Status({ status, action }: StatusProps) {
    const { t } = useTranslation("home");

    return (
        <div
            className={ `flex gap-1 items-center` }
        >
            <TagItem
                name={ t(`taskStatus.${status}`) }
                className={ `border-none border-(--border-card) shadow-(--shadow-m) hover:cursor-default` }
            />
            { action }
        </div>
    );
}
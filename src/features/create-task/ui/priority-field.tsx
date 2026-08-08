import { FieldWrapper } from "../../../shared/ui/field-wrapper";
import { Label } from "../../../shared/ui/label";
import { RadioGroup, RadioItem } from "../../../shared/ui/radio-group";
import type { TaskPriority } from "../../../entities/task";
import { TagItem } from "../../../shared/ui/tag-item";
import { useTranslation } from "react-i18next";
import type { Dispatch, SetStateAction } from "react";


interface PriorityFieldsProps {
    priority: TaskPriority;
    setPriority: Dispatch<SetStateAction<TaskPriority>>;
}

export function PriorityField({ priority, setPriority }: PriorityFieldsProps) {
    const { t } = useTranslation("home");

    return (
        <FieldWrapper>
            <Label
                className="uppercase"
            >
                { t("newTaskSection.priorityLabel") }
            </Label>
            <RadioGroup
                className={ `flex-row` }
                defaultValue={"MEDIUM"}
                onValueChange={(value) => setPriority(value as TaskPriority)}
            >
                <RadioItem
                    asChild
                    value={"HIGH"}
                    id={"high"}
                >
                    <TagItem
                        name={ t("newTaskSection.priority.high") }
                        className={ `bg-none text-(--text-muted)
                        ${priority === "HIGH" ? "shadow-(--glow-high) text-(--high) border-(--high)" : ""}` }
                    />
                </RadioItem>
                <RadioItem
                    asChild
                    value={"MEDIUM"}
                    id={"med"}
                >
                    <TagItem
                        name={ t("newTaskSection.priority.medium") }
                        className={ `bg-none text-(--text-muted)
                        ${priority === "MEDIUM" ? "shadow-(--glow-medium) text-(--medium) border-(--medium)" : ""} ` }
                    />
                </RadioItem>
                <RadioItem
                    asChild
                    value={"LOW"}
                    id={"low"}
                >
                    <TagItem
                        name={ t("newTaskSection.priority.low") }
                        className={ `bg-none text-(--text-muted)
                        ${priority === "LOW" ? "shadow-(--glow-low) text-(--low) border-(--low)" : ""}` }
                    />
                </RadioItem>
            </RadioGroup>
        </FieldWrapper>
    );
}
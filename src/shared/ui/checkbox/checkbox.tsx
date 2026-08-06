import { Checkbox as RCheck } from "radix-ui";
import { Check } from "lucide-react";
import { Label } from "../label";
import { twMerge } from "tailwind-merge";


interface CheckboxLabelProps {
    classes?: string;
    label?: string;
}

export function Checkbox({ label, id, classes, children, asChild, className, ...props }: RCheck.CheckboxProps & CheckboxLabelProps) {

    if (asChild) {
        return (
            <RCheck.Root asChild { ...props } id={ id }>
                { children }
            </RCheck.Root>
        );
    }

    return (
        <div
            className="flex items-center"
        >
            <RCheck.Root
                className={ twMerge(`flex size-6 items-center justify-center rounded bg-(--bg-light)
                    shadow-(--shadow-s)
                    hover:cursor-pointer
                    hover:shadow-(--shadow-m)
                    outline-none transition-all`, className || ""
                ) }
                id={ id }
                { ...props }
            >
                <RCheck.Indicator className="text-(--text) flex justify-center">
                    <Check
                        className="size-[60%]"
                    />
                </RCheck.Indicator>
            </RCheck.Root>
            <Label
                htmlFor={ id }
                className={ classes || "" }
            >
                { label || "" }
            </Label>
        </div>
    )
}
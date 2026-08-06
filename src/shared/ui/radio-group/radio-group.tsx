import { RadioGroup as RRadioGroup } from "radix-ui";
import { twMerge } from "tailwind-merge";
import { Label } from "../label";

export function RadioGroup({ children, className, ...props }: RRadioGroup.RadioGroupProps) {

    return <RRadioGroup.Root
        className={ twMerge("flex flex-col gap-2", className || "") }
        { ...props }
    >
        { children }
    </RRadioGroup.Root>;
}

interface RadioLabelProps {
    label?: string;
    classes?: string;
}

export function RadioItem({ id, className, children, classes, label, asChild, ...props }: RRadioGroup.RadioGroupItemProps & RadioLabelProps) {

    if (asChild) {
        return <RRadioGroup.Item asChild {...props} id={id}>
            { children }
        </RRadioGroup.Item>
    }

    return (
        <div className="flex items-center">
            <RRadioGroup.Item
                className={ twMerge(`
                size-6 cursor-default rounded-full 
                bg-(--bg-light) shadow-(--shadow-s) outline-none 
                hover:shadow-(--shadow-m)
                hover:cursor-pointer
                transition-all
                `, className || "") }
                id={ id }
                { ...props }
            >
                <RRadioGroup.Indicator
                    className={ `relative flex size-full items-center justify-center 
                    after:block after:size-3 after:rounded-full after:bg-(--text)` }
                />
            </RRadioGroup.Item>
            <Label
                htmlFor={ id }
                className={ classes || "" }
            >
                { label || "" }
            </Label>
        </div>
    );
}
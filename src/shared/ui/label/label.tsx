import { Label as RLabel } from "radix-ui";
import { twMerge } from "tailwind-merge";

function Label({ className, children, ...props }: RLabel.LabelProps) {
    const baseStyles = "font-mono uppercase";

    return <RLabel.Root
        className={ twMerge(baseStyles, className) }
        { ...props }
    >
        { children }
    </RLabel.Root>;
}

export { Label };
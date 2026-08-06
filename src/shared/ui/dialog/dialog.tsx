import { Dialog as RDialog } from "radix-ui";
import { type Ref } from "react";
import { twMerge } from "tailwind-merge";
import { X } from "lucide-react";


export const Dialog = RDialog.Root;

export const DialogTrigger = RDialog.Trigger;

interface DialogContentExtendedProps extends RDialog.DialogContentProps {
    titleContent?: string
}

export function DialogContent({ children, className, titleContent, ...props }: DialogContentExtendedProps, ref?: Ref<HTMLDivElement>) {

    return (
        <RDialog.Portal>
            <RDialog.Overlay className={ `fixed inset-0 bg-[#00000080] data-[state=open]:animate-overlay-show"` } />
            <RDialog.Content
                className={ twMerge( `fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] 
                -translate-x-1/2 -translate-y-1/2 rounded-md bg-(--bg) p-[25px] shadow-(--shadow-m)
                focus:outline-none data-[state=open]:animate-content-show`, className ) }
                { ...props }
                ref={ ref }
            >
                { titleContent && <RDialog.Title className="m-0 text-lg font-medium text-(--text)">
                    { titleContent }
                </RDialog.Title> }
                { children }
                <RDialog.Close
                    aria-label="Close"
                    className={ `absolute right-4 top-4 size-5 appearance-none hover:cursor-pointer` }
                >
                    <X className={ "text-(--text)" } />
                </RDialog.Close>
            </RDialog.Content>
        </RDialog.Portal>
    );
}
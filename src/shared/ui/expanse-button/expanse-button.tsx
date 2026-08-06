import { ChevronUp } from "lucide-react";
import { Button } from "../button";
import type { Dispatch, ReactNode, SetStateAction } from "react";


interface ExpanseButtonProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    content: ReactNode;
}

export function ExpanseButton({ isOpen, setIsOpen, content }: ExpanseButtonProps) {

    return (
        <Button
            onClick={() => setIsOpen(prev => !prev)}
            className={ `w-full py-3
                flex items-center justify-between
                border-none bg-none bg-transparent shadow-none
                hover:bg-none ` }
        >
            <div
                className={ `flex gap-2 items-center tracking-widest` }
            >
                { content }

            </div>
            <ChevronUp
                className={ `w-5 h-5 text-(--text-muted) ${ !isOpen ? "animate-open-rotate" : "animate-close-rotate" }` }
            />
        </Button>
    );
}
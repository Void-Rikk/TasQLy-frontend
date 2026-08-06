import { ChevronUp, Plus } from "lucide-react";
import { Button } from "../../../shared/ui/button";
import type { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";


interface ExpanseButtonProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export function ExpanseButton({ isOpen, setIsOpen }: ExpanseButtonProps) {
    const { t } = useTranslation("home");

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
                <Plus
                    className={ `w-5 h-5 text-(--primary) rounded-md bg-(--bg-light) shadow-(--shadow-s)` }
                />
                { t("newTaskSection.header") }
            </div>
            <ChevronUp
                className={ `w-5 h-5 text-(--text-muted) ${ !isOpen ? "animate-open-rotate" : "animate-close-rotate" }` }
            />
        </Button>
    );
}
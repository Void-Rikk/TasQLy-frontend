import type { ComponentProps } from "react";


function Button({ className, children, ...props }: ComponentProps<"button">) {

    return <button
        className={ `border-1 border-primary-300 
            shadow-lg shadow-primary-100
            rounded-xl px-6 py-2 text-primary-foreground bg-primary-400 
            hover:cursor-pointer hover:ring-1 hover:ring-primary-200
            transition-all` }
        { ...props }
    >
        { children }
    </button>
}

export { Button };
import { SearchForm } from "./search-form.tsx";


export function SearchTaskPanel() {

    return (
        <div
            className={ `flex flex-col gap-2 p-4
            bg-(image:--gradient)
            border-(--border-card) border-t-(--highlight)
            rounded-xl shadow-(--shadow-s)
            animate-appearance` }
        >
            <SearchForm />
        </div>
    );
}
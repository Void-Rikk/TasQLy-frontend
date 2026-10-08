import { Search } from "lucide-react";
import { Input } from "../../../shared/ui/input";
import { useTranslation } from "react-i18next";
import { useDebounce } from "../../../shared/hooks";
import { type ChangeEventHandler, useEffect, useState } from "react";
import { useSetTasksFiltersSearchQuery } from "../../../entities/task";


export function SearchForm() {
    const { t } = useTranslation("home");
    const [searchQuery, setSearchQuery] = useState<string>("");

    const debouncedSearchQuery = useDebounce(searchQuery, 400);

    const setTasksFiltersSearchQuery = useSetTasksFiltersSearchQuery();

    useEffect(() => {
        setTasksFiltersSearchQuery(debouncedSearchQuery);
    }, [debouncedSearchQuery]);

    const handleChangeSearchQuery: ChangeEventHandler<HTMLInputElement> = (e) => {
        setSearchQuery(e.target.value);
    }

    return (
        <form
            className={ `flex items-center gap-2` }
        >
            <Search
                className={ `text-(--text-muted) size-6` }
            />
            <Input
                className={ `bg-none bg-(--bg-light)
                    shadow-(--shadow-m) grow` }
                placeholder={ t("searchSection.searchPlaceholder") }
                value={ searchQuery }
                onChange={ handleChangeSearchQuery }
            />
        </form>
    );
}
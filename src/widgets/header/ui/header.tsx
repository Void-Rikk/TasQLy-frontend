import { getCurrentDate } from "../../../shared/lib/utils";
import { useTranslation } from "react-i18next";
import Logo from "../../../shared/ui/icons/GraphQL.png";


export function Header() {
    const date = getCurrentDate();
    const { t } = useTranslation("home");

    return (
        <header
            className={ `flex flex-col gap-2` }
        >
            <h1
                className={ `text-(--text) text-3xl font-semibold uppercase
                flex gap-2 items-center` }
            >
                <img
                    src={ Logo }
                    alt={ "Logo" }
                    width={ "40px" }
                />
                tasqly
            </h1>
            <p className={ `text-(--text-muted) uppercase text-xs font-mono tracking-wider` }>
                { t(`header.days.${date.day}`) }, { t(`header.months.${date.month}`) } { date.date }, { date.year }
            </p>
        </header>
    );
}
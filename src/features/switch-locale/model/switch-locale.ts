import type { i18n } from "i18next";

export async function switchLocale(i18n: i18n) {
    const currLang = i18n.language;

    i18n.changeLanguage(currLang === "ru" ? "en" : "ru");
}
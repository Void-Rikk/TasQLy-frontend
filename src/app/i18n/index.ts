import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ruHome from "./locales/ru/home.json";
import enHome from "./locales/en/home.json";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            ru: { home: ruHome },
            en: { home: enHome }
        },
        fallbackLng: "en",
        debug: false,
        interpolation: {
            escapeValue: false
        },
    });
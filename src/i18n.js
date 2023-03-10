import i18n from "./i18n"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        debug: true,
        interpolation: {
            escapeValue : false,
        },
        resources: {
            en: {
                transplation : {
                    
                }
            }
        }
    });

export default i18n;
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import TranslationAr from "./Translations/ar.json";
import TranslationEn from "./Translations/en.json";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: TranslationEn,
  },
  ar: {
    translation: TranslationAr,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "ar",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    react: {
      usesuspense: false,
    },
    detection: {
      order: ["cookie", "path", "navigator"],
      caches: ["cookie"],
    },
    saveMissing: true,
    saveMissingTo: "all",
    keySeparator: ".",
    nsSeparator: ":",
    backend: {
      loadPath: "./Translations/{{lng}}/translation.json",
    },
  });

// Debugging logs
console.log("Initial language:", i18n.language);

// Add a listener to log language changes
i18n.on("languageChanged", (lng) => {
  console.log("Language changed to:", lng);
});

export default i18n;

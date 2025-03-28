import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next.use(LanguageDetector).use(initReactI18next).init({
  debug: true,
  lng: "en", 
  resources: {
    en: {
      translation: {
        human: "Human",
        alien: "Alien",
        unknown: "Unknown",
        allspecies: "All Species",
        dead: "Dead",
        alive: "Alive",
        allstatuses: "All Statuses",
        english: "English",
        macedonian: "Macedonian",
        german: "German",
        status: "{{value}}",
        species: "{{value}}",
        origin: "{{value}}",
        gender: "{{value}}",
        male: "Male",
        female: "Female",
        previous: "Previous",
        next: "Next",
        error: "Something went wrong",
      },
    },
    de: {
      translation: {
        human: "Menschlich",
        alien: "Ausländer",
        unknown: "Unbekannt",
        allspecies: "Alle Arten",
        dead: "Tot",
        alive: "Lebendig",
        allstatuses: "Alle Statuses",
        english: "Englisch",
        macedonian: "Mazedonisch",
        german: "Deutsch",
        status: "{{value}}",
        species: "{{value}}",
        origin: "{{value}}",
        gender: "{{value}}",
        male: "Männlich",
        female: "Weiblich",
        previous: "Vorherige",
        next: "Nächste",
        error: "Etwas ist schiefgelaufen",
      },
    },
    mk: {
      translation: {
        human: "Човек",
        alien: "Вонземјанин",
        unknown: "Непознато",
        allspecies: "Сите видови",
        dead: "Мртов",
        alive: "Жив",
        allstatuses: "Сите статуси",
        english: "Англиски",
        macedonian: "Македонски",
        german: "Германски",
        status: "{{value}}",
        species: "{{value}}",
        origin: "{{value}}",
        gender: "{{value}}",
        male: "Maж",
        female: "Жена",
        previous: "Претходно",
        next: "Следно",
        error: "Нешто тргна наопаку",
      },
    },
  }
});

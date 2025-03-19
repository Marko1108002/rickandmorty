import React from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", key: "english" },
  { code: "de", key: "german" },
  { code: "mk", key: "macedonian" },
];

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="bg-gray-900 p-6 flex gap-4 justify-center">
      {languages.map((lng) => (
        <button
          key={lng.code}
          onClick={() => changeLanguage(lng.code)}
          className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300"
        >
          {t(lng.key)}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;

import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  {
    code: "en",
    icon: (
      <svg
        className="w-8 h-8"
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 30 20"
        viewBox="0 0 30 20"
        id="england-flag"
      >
        <rect width="30" height="20"></rect>
        <rect width="28" height="18" x="1" y="1" fill="#fff"></rect>
        <polygon
          fill="#ce1124"
          points="29 8 17 8 17 1 13 1 13 8 1 8 1 12 13 12 13 19 17 19 17 12 29 12"
        ></polygon>
      </svg>
    ),
  },
  {
    code: "de",
    icon: (
      <svg
        className="w-8 h-8"
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 30 20"
        viewBox="0 0 30 20"
        id="germany-flag"
      >
        <rect width="30" height="20"></rect>
        <rect width="28" height="6" x="1" y="1"></rect>
        <rect width="28" height="6" x="1" y="13" fill="#ffce00"></rect>
        <rect width="28" height="6" x="1" y="7" fill="#d00"></rect>
      </svg>
    ),
  },
  {
    code: "mk",
    icon: (
      <svg
        className="w-8 h-8"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 20"
        id="macedonia-flag"
      >
        <path fill="#d20000" d="M1 1h28v18H1z"></path>
        <path
          fill="#ffe600"
          d="m15 9-2-8h4zM15 11l2 8h-4zM15 10 1 12V8zM15 10l14-2v4z"
        ></path>
        <path
          fill="none"
          d="M5.118 20h19.764L15 10l15 9.615V.385L15 10l9.882-10H5.118L15 10 0 .385v19.23L15 10z"
        ></path>
        <path
          fill="#ffe600"
          d="M15 10 0 19.615V20h5.118zM30 .385V0h-5.118L15 10zM24.882 20H30v-.385L15 10zM5.118 0H0v.385L15 10z"
        ></path>
        <path d="M0 0v20h30V0H0zm29 19H1V1h28v18z"></path>
        <circle cx="15" cy="10" r="3.25" fill="#d20000"></circle>
        <circle cx="15" cy="10" r="2.75" fill="#ffe600"></circle>
      </svg>
    ),
  },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="bg-gray-900 p-6 flex justify-end items-center gap-2 relative">
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gray-700 text-white py-2 px-2 rounded-lg hover:bg-gray-600 transition duration-300 flex items-center"
        >
          <svg
            className="text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="white"
            class="bi bi-globe"
            viewBox="0 0 16 16"
          >
            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
          </svg>
        </button>
        {isOpen && (
          <div
            className="absolute bg-gray-700 text-white mt-1 rounded-lg w-auto"
            style={{ right: "15px" }} 
          >
            {languages.map((lng) => (
              <div
                key={lng.code}
                onClick={() => changeLanguage(lng.code)}
                className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-600"
              >
                {lng.icon}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;

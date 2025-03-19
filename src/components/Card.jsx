import React from "react";
import { useTranslation } from "react-i18next";

export function Card({ image, name, status, species, gender, origin }) {
  const { t } = useTranslation();

  return (
    <div>
      <div className="max-w-sm rounded-lg overflow-hidden shadow-xl bg-gray-800">
        <img className="w-full" src={image} alt={name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-white">{name}</div>
          <p className="text-blue-500 text-base font-semibold">
            {t("gender", { value: t(gender.toLowerCase()) })}
          </p>
        </div>
        <div className="flex justify-start">
          <span
            className={`inline-block rounded-full px-3 py-1 text-sm font-semibold mx-1 mb-2 ${
              status === "Alive"
                ? "bg-green-500 text-gray-900"
                : status === "unknown"
                ? "bg-lime-500 text-gray-900"
                : "bg-red-500 text-gray-900"
            }`}
          >
            {t("status", { value: t(status.toLowerCase()) })}
          </span>
          <span
            className={`inline-block rounded-full px-3 py-1 text-sm font-semibold mx-1 mb-2 ${
              species === "Human"
                ? "bg-yellow-500 text-gray-900"
                : species === "Alien"
                ? "bg-purple-500 text-gray-900"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {t("species", { value: t(species.toLowerCase()) })}
          </span>
          <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mx-1 mb-2">
            {t("origin", { value: origin })}
          </span>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { useTranslation } from "react-i18next";

export function Card({ image, name, status, species, gender, origin }) {
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-col my-6 bg-gray-800 shadow-sm border border-slate-900 sha rounded-lg w-96">

      <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
        <img className="w-full h-full object-cover" src={image} alt={name} />
      </div>
      

      <div className="p-4">
        <h6 className="mb-2 text-white text-xl font-semibold">{name}</h6>
        <p className="text-blue-400 leading-normal font-bold">
          {t("gender", { value: t(gender.toLowerCase()) })}
        </p>
      </div>
      

      <div className="flex flex-wrap justify-start px-4 pb-4 pt-0 mt-2">
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

  );
}

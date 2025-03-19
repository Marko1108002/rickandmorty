import React from "react";
import { useTranslation } from "react-i18next";

export default function ErrorScreen() {
  const { t } = useTranslation(); 

  return (
    <div className="dark bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="text-xl font-semibold">
        {t("error")} 
      </div>
    </div>
  );
}

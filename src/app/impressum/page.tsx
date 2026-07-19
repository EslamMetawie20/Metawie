"use client";

import React from "react";
import { useLanguage } from "@/i18n/context/LanguageContext";
import { Scale } from "lucide-react";

export default function Impressum() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 animate-fade-in">
      {/* Title */}
      <div className="border-b border-border-main pb-6 mb-8 flex items-center gap-3">
        <Scale size={28} className="text-brand" />
        <h1 className="text-3xl font-extrabold tracking-tight text-fg-main sm:text-4xl">
          {t("impressum.page_title")}
        </h1>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-8 text-sm leading-relaxed text-text-muted">
        <div>
          <h2 className="text-base font-extrabold text-fg-main mb-3">
            {t("impressum.heading_operator")}
          </h2>
          <p className="whitespace-pre-line">{t("impressum.body_operator")}</p>
        </div>

        <div className="border-t border-border-main/60 pt-6">
          <h2 className="text-base font-extrabold text-fg-main mb-3">
            {t("impressum.heading_contact")}
          </h2>
          <p className="whitespace-pre-line">{t("impressum.body_contact")}</p>
        </div>

        <div className="border-t border-border-main/60 pt-6">
          <h2 className="text-base font-extrabold text-fg-main mb-3">
            {t("impressum.heading_disclaimer")}
          </h2>
          <p>{t("impressum.body_disclaimer")}</p>
        </div>
      </div>
    </div>
  );
}

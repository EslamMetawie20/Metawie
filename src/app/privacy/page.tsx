"use client";

import React from "react";
import { useLanguage } from "@/i18n/context/LanguageContext";
import { ShieldCheck } from "lucide-react";

export default function Privacy() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 animate-fade-in">
      {/* Title */}
      <div className="border-b border-border-main pb-6 mb-8 flex items-center gap-3">
        <ShieldCheck size={28} className="text-brand" />
        <h1 className="text-3xl font-extrabold tracking-tight text-fg-main sm:text-4xl">
          {t("privacy.page_title")}
        </h1>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-8 text-sm leading-relaxed text-text-muted">
        <div>
          <h2 className="text-base font-extrabold text-fg-main mb-3">
            {t("privacy.heading_data")}
          </h2>
          <p>{t("privacy.body_data")}</p>
        </div>

        <div className="border-t border-border-main/60 pt-6">
          <h2 className="text-base font-extrabold text-fg-main mb-3">
            {t("privacy.heading_contact")}
          </h2>
          <p>{t("privacy.body_contact")}</p>
        </div>

        <div className="border-t border-border-main/60 pt-6">
          <h2 className="text-base font-extrabold text-fg-main mb-3">
            {t("privacy.heading_rights")}
          </h2>
          <p>{t("privacy.body_rights")}</p>
        </div>

        <div className="border-t border-border-main/60 pt-6 text-xs font-mono">
          {t("privacy.last_updated")} <span dir="ltr" className="inline-block">2026-07-19</span>
        </div>
      </div>
    </div>
  );
}

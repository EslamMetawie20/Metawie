"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/i18n/context/LanguageContext";
import { ShieldAlert, Home } from "lucide-react";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center animate-fade-in">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-brand/20 bg-brand/5 text-brand mb-6 shadow-sm">
        <ShieldAlert size={32} />
      </div>
      
      <h1 className="font-mono text-7xl font-extrabold text-brand tracking-tighter">
        {t("not_found.title")}
      </h1>
      
      <h2 className="text-2xl font-black text-fg-main mt-4 sm:text-3xl">
        {t("not_found.heading")}
      </h2>
      
      <p className="text-sm text-text-muted mt-2 max-w-sm leading-relaxed">
        {t("not_found.description")}
      </p>

      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 text-xs font-bold text-brand-fg hover:bg-brand-hover transition-all cursor-pointer font-sans"
      >
        <Home size={14} />
        <span>{t("not_found.btn")}</span>
      </Link>
    </div>
  );
}

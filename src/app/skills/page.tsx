"use client";

import React from "react";
import { useLanguage } from "@/i18n/context/LanguageContext";
import { skillsData } from "@/data/portfolioData";
import { Code2, GitBranch, Server, CheckCircle2 } from "lucide-react";

export default function Skills() {
  const { t } = useLanguage();

  const getGroupIcon = (id: string) => {
    switch (id) {
      case "development":
        return <Code2 size={20} />;
      case "devops":
        return <GitBranch size={20} />;
      case "cloud":
        return <Server size={20} />;
      default:
        return <CheckCircle2 size={20} />;
    }
  };

  const getLevelLabel = (level: string) => {
    switch (level) {
      case "professional":
        return t("skills.level_professional");
      case "project":
        return t("skills.level_project");
      case "academic":
        return t("skills.level_academic");
      case "developing":
        return t("skills.level_developing");
      default:
        return level;
    }
  };

  const getLevelStyles = (level: string) => {
    switch (level) {
      case "professional":
        return "bg-brand/5 border-brand/20 text-brand";
      case "project":
        return "bg-emerald-500/5 border-emerald-500/20 text-emerald-600 dark:text-emerald-400";
      case "academic":
        return "bg-amber-500/5 border-amber-500/20 text-amber-600 dark:text-amber-400";
      case "developing":
        return "bg-text-muted/5 border-border-main text-text-muted";
      default:
        return "bg-bg-main border-border-main text-text-muted";
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      {/* Title */}
      <div className="border-b border-border-main pb-8 mb-12">
        <h1 className="text-3xl font-extrabold tracking-tight text-fg-main sm:text-4xl">
          {t("skills.page_title")}
        </h1>
        <p className="text-sm text-text-muted mt-2">
          {t("skills.page_subtitle")}
        </p>
      </div>

      {/* Grid of Groups */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {skillsData.map((group) => (
          <div
            key={group.id}
            className="rounded-xl border border-border-main bg-bg-card p-6 shadow-sm"
          >
            {/* Header */}
            <div className="flex items-center gap-3 pb-4 border-b border-border-main mb-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand/20 bg-brand/5 text-brand shrink-0">
                {getGroupIcon(group.id)}
              </div>
              <h2 className="text-base font-extrabold text-fg-main">
                {t(group.titleKey)}
              </h2>
            </div>

            {/* Skills List */}
            <div className="flex flex-col gap-3.5">
              {group.skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-4 p-2.5 rounded-lg border border-border-main/40 bg-bg-main/20 hover:border-brand/40 transition-colors"
                >
                  <span className="text-xs font-bold text-fg-main">
                    {skill.name}
                  </span>
                  
                  <span 
                    className={`rounded border px-2.5 py-0.5 font-mono text-[9px] font-bold tracking-wider uppercase shrink-0 ${getLevelStyles(skill.level)}`}
                  >
                    {getLevelLabel(skill.level)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import React from "react";
import { useLanguage } from "@/i18n/context/LanguageContext";
import { timelineData } from "@/data/portfolioData";
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      {/* Title */}
      <div className="border-b border-border-main pb-8 mb-12">
        <h1 className="text-3xl font-extrabold tracking-tight text-fg-main sm:text-4xl">
          {t("experience.page_title")}
        </h1>
        <p className="text-sm text-text-muted mt-2">
          {t("experience.page_subtitle")}
        </p>
      </div>

      {/* Timeline Layout */}
      <div className="relative border-l border-border-main pl-6 ml-4 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-6 rtl:ml-0 rtl:mr-4 flex flex-col gap-12">
        {timelineData.map((item) => (
          <div key={item.id} className="relative">
            {/* Timeline Dot */}
            <div className="absolute -left-[37px] top-1.5 rtl:-left-0 rtl:-right-[37px] flex h-6.5 w-6.5 items-center justify-center rounded-full border border-border-main bg-bg-main text-brand">
              {item.isEducation ? <GraduationCap size={14} /> : <Briefcase size={14} />}
            </div>

            {/* Content Card */}
            <div className="rounded-xl border border-border-main bg-bg-card p-6 shadow-sm max-w-4xl">
              {/* Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-4">
                <div>
                  <h3 className="text-lg font-black text-fg-main flex items-center gap-2">
                    {t(item.roleKey)}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-text-muted font-semibold mt-1">
                    <span className="text-brand font-bold uppercase tracking-wider">
                      {t(item.companyKey)}
                    </span>
                    <span className="text-border-main">•</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {t(item.locationKey)}
                    </span>
                  </div>
                </div>
                
                {item.periodKey && (
                  <span className="flex items-center gap-1 rounded bg-bg-main border border-border-main px-2 py-0.5 font-mono text-[10px] text-text-muted shrink-0">
                    <Calendar size={10} />
                    {t(item.periodKey)}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-xs text-text-muted leading-relaxed mb-6">
                {t(item.descriptionKey)}
              </p>

              {/* Responsibilities / Tasks */}
              <div>
                <h4 className="font-mono text-[10px] font-bold text-brand uppercase tracking-wider mb-3">
                  {item.isEducation ? t("experience.study_focus") : t("experience.responsibilities")}
                </h4>
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {item.tasksKeys.map((taskKey, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs text-fg-main leading-relaxed">
                      <span className="text-success mt-0.5 shrink-0">
                        <CheckCircle2 size={14} />
                      </span>
                      <span>{t(taskKey)}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

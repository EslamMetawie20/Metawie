"use client";

import React from "react";
import { useLanguage } from "@/i18n/context/LanguageContext";
import { GraduationCap, Heart } from "lucide-react";

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      {/* Title */}
      <div className="border-b border-border-main pb-8 mb-12">
        <h1 className="text-3xl font-extrabold tracking-tight text-fg-main sm:text-4xl">
          {t("about.page_title")}
        </h1>
        <p className="text-sm text-text-muted mt-2">
          {t("about.page_subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Left Side: Biography & Philosophy */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          {/* Section 1 */}
          <div className="flex gap-4">
            <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-brand/20 bg-brand/5 text-brand">
              <Heart size={18} />
            </div>
            <div>
              <h2 className="text-lg font-extrabold text-fg-main mb-2">
                {t("about.bio_heading")}
              </h2>
              <div className="text-sm text-text-muted leading-relaxed flex flex-col gap-4">
                <p>{t("about.bio_p1")}</p>
                <p>{t("about.bio_p2")}</p>
                <p>{t("about.bio_p3")}</p>
              </div>
            </div>
          </div>

          {/* Section 2: Education detail */}
          <div className="flex gap-4 border-t border-border-main pt-8">
            <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-brand/20 bg-brand/5 text-brand">
              <GraduationCap size={18} />
            </div>
            <div>
              <h2 className="text-lg font-extrabold text-fg-main mb-2">
                {t("about.education_heading")}
              </h2>
              <div className="rounded-xl border border-border-main bg-bg-card p-6 mt-4">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-4">
                  <div>
                    <h3 className="font-extrabold text-fg-main text-base">
                      {t("about.edu_degree")}
                    </h3>
                    <p className="text-xs text-brand font-semibold font-mono mt-1">
                      {t("about.edu_uni")}
                    </p>
                  </div>
                  <span className="rounded bg-brand/5 border border-brand/20 px-2 py-0.5 font-mono text-[10px] font-semibold text-brand shrink-0">
                    {t("about.edu_stage")}
                  </span>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  {t("about.edu_desc")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Quick Stats & Focus area */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Context box */}
          <div className="rounded-xl border border-border-main bg-bg-card p-6 bg-grid-pattern">
            <h3 className="font-mono text-xs font-bold text-brand uppercase tracking-wider mb-4">
              {"// Profile Summary"}
            </h3>
            <ul className="flex flex-col gap-4 text-xs font-medium text-text-muted">
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand mt-1.5 shrink-0" />
                <div>
                  <span className="text-fg-main font-bold block mb-0.5">Title</span>
                  <span>Software Engineer & DevOps Engineer</span>
                </div>
              </li>
              <li className="flex items-start gap-2 border-t border-border-main/60 pt-3">
                <span className="h-1.5 w-1.5 rounded-full bg-brand mt-1.5 shrink-0" />
                <div>
                  <span className="text-fg-main font-bold block mb-0.5">Studies</span>
                  <span>Ostfalia University of Applied Sciences</span>
                </div>
              </li>
              <li className="flex items-start gap-2 border-t border-border-main/60 pt-3">
                <span className="h-1.5 w-1.5 rounded-full bg-brand mt-1.5 shrink-0" />
                <div>
                  <span className="text-fg-main font-bold block mb-0.5">Current Work</span>
                  <span>GGU-Software (Germany)</span>
                </div>
              </li>
              <li className="flex items-start gap-2 border-t border-border-main/60 pt-3">
                <span className="h-1.5 w-1.5 rounded-full bg-brand mt-1.5 shrink-0" />
                <div>
                  <span className="text-fg-main font-bold block mb-0.5">Focus Areas</span>
                  <span>Full-Stack Development, CI/CD, Containerization, Release Automation</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick learning card */}
          <div className="rounded-xl border border-border-main bg-bg-card p-6">
            <h3 className="font-mono text-xs font-bold text-brand uppercase tracking-wider mb-3">
              {"// Core Philosophy"}
            </h3>
            <p className="text-xs text-text-muted leading-relaxed">
              &quot;Continuous testing and automated pipelines allow teams to focus on design and architecture, reducing the fear of delivery day and manual mistakes.&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

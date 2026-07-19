"use client";

import React from "react";
import { useLanguage } from "@/i18n/context/LanguageContext";
import {
  experienceData,
  educationData,
  expertiseData,
  languagesData,
  interestsData,
} from "@/data/portfolioData";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  Server,
  LayoutTemplate,
  Workflow,
  Database,
  KanbanSquare,
  Wrench,
  Languages,
  Plane,
  Fish,
  Telescope,
  Code2,
  Repeat,
  FlaskConical,
  BookOpen,
} from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  backend: <Server size={16} />,
  frontend: <LayoutTemplate size={16} />,
  devops: <Workflow size={16} />,
  databases: <Database size={16} />,
  pm: <KanbanSquare size={16} />,
  tools: <Wrench size={16} />,
};

const interestIcons: Record<string, React.ReactNode> = {
  travel: <Plane size={20} />,
  fishing: <Fish size={20} />,
  astronomy: <Telescope size={20} />,
};

const principleIcons = [
  <Code2 key="code" size={16} />,
  <Repeat key="repeat" size={16} />,
  <FlaskConical key="flask" size={16} />,
  <BookOpen key="book" size={16} />,
];

const SectionHeading: React.FC<{ eyebrow: string; title: string }> = ({ eyebrow, title }) => (
  <div className="mb-8">
    <p className="font-mono text-xs font-bold text-brand uppercase tracking-wider mb-2">
      {eyebrow}
    </p>
    <h2 className="text-2xl font-extrabold tracking-tight text-fg-main">{title}</h2>
  </div>
);

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { value: t("about.stat_semester_value"), label: t("about.stat_semester_label") },
    { value: t("about.stat_positions_value"), label: t("about.stat_positions_label") },
    { value: t("about.stat_languages_value"), label: t("about.stat_languages_label") },
    { value: t("about.stat_german_value"), label: t("about.stat_german_label") },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      {/* Page Header */}
      <div className="border-b border-border-main pb-8 mb-12">
        <p className="font-mono text-xs font-bold text-brand uppercase tracking-wider mb-2">
          {t("about.intro_eyebrow")}
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight text-fg-main sm:text-4xl">
          {t("about.page_title")}
        </h1>
        <p className="text-sm text-text-muted mt-2">{t("about.page_subtitle")}</p>
      </div>

      {/* 1 + 2: About Me & Professional Summary */}
      <section className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7 flex flex-col gap-5">
          <p className="text-base font-medium text-fg-main leading-relaxed">
            {t("about.intro_p1")}
          </p>
          <p className="text-sm text-text-muted leading-relaxed">{t("about.summary_p1")}</p>
          <p className="text-sm text-text-muted leading-relaxed">{t("about.summary_p2")}</p>
        </div>

        {/* Stats */}
        <div className="lg:col-span-5">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border-main bg-bg-card p-5 bg-grid-pattern"
              >
                <p className="text-2xl font-black text-brand font-mono">{stat.value}</p>
                <p className="text-xs text-text-muted font-semibold mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3: Professional Experience */}
      <section className="mt-20">
        <SectionHeading
          eyebrow={t("about.experience_eyebrow")}
          title={t("about.experience_heading")}
        />
        <div className="relative border-l border-border-main pl-6 ml-4 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-6 rtl:ml-0 rtl:mr-4 flex flex-col gap-10">
          {experienceData.map((item) => (
            <div key={item.id} className="relative">
              <div className="absolute -left-[37px] top-1.5 rtl:-left-0 rtl:-right-[37px] flex h-6.5 w-6.5 items-center justify-center rounded-full border border-border-main bg-bg-main text-brand">
                <Briefcase size={14} />
              </div>

              <div className="rounded-xl border border-border-main bg-bg-card p-6 shadow-sm max-w-4xl">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-black text-fg-main flex flex-wrap items-center gap-2">
                      {t(item.roleKey)}
                      {item.current && (
                        <span className="rounded bg-success/10 border border-success/30 px-2 py-0.5 font-mono text-[10px] font-semibold text-success">
                          {t("about.current_badge")}
                        </span>
                      )}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-text-muted font-semibold mt-1">
                      <span className="text-brand font-bold uppercase tracking-wider">
                        {t(item.companyKey)}
                      </span>
                      {item.locationKey && (
                        <>
                          <span className="text-border-main">•</span>
                          <span className="flex items-center gap-1">
                            <MapPin size={12} />
                            {t(item.locationKey)}
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  <span className="flex items-center gap-1 rounded bg-bg-main border border-border-main px-2 py-0.5 font-mono text-[10px] text-text-muted shrink-0">
                    <Calendar size={10} />
                    {t(item.periodKey)}
                  </span>
                </div>

                <p className="text-xs text-text-muted leading-relaxed mb-5">
                  {t(item.descriptionKey)}
                </p>

                {item.tasksKeys.length > 0 && (
                  <div className="mb-5">
                    <h4 className="font-mono text-[10px] font-bold text-brand uppercase tracking-wider mb-3">
                      {t("about.tasks_label")}
                    </h4>
                    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {item.tasksKeys.map((taskKey) => (
                        <li
                          key={taskKey}
                          className="flex items-start gap-2 text-xs text-fg-main leading-relaxed"
                        >
                          <span className="text-success mt-0.5 shrink-0">
                            <CheckCircle2 size={14} />
                          </span>
                          <span>{t(taskKey)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 border-t border-border-main/60 pt-4">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-brand/5 border border-brand/20 px-2 py-0.5 font-mono text-[10px] font-semibold text-brand"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4: Education */}
      <section className="mt-20">
        <SectionHeading
          eyebrow={t("about.education_eyebrow")}
          title={t("about.education_heading")}
        />
        <div className="relative border-l border-border-main pl-6 ml-4 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-6 rtl:ml-0 rtl:mr-4 flex flex-col gap-10">
          {educationData.map((item) => (
            <div key={item.id} className="relative">
              <div className="absolute -left-[37px] top-1.5 rtl:-left-0 rtl:-right-[37px] flex h-6.5 w-6.5 items-center justify-center rounded-full border border-border-main bg-bg-main text-brand">
                <GraduationCap size={14} />
              </div>

              <div className="rounded-xl border border-border-main bg-bg-card p-6 shadow-sm max-w-4xl">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-black text-fg-main">{t(item.degreeKey)}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-text-muted font-semibold mt-1">
                      <span className="text-brand font-bold uppercase tracking-wider">
                        {t(item.schoolKey)}
                      </span>
                      <span className="text-border-main">•</span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {t(item.locationKey)}
                      </span>
                    </div>
                  </div>

                  <span className="flex items-center gap-1 rounded bg-bg-main border border-border-main px-2 py-0.5 font-mono text-[10px] text-text-muted shrink-0">
                    <Calendar size={10} />
                    {t(item.periodKey)}
                  </span>
                </div>

                {item.badgeKey && (
                  <span className="inline-block rounded bg-brand/5 border border-brand/20 px-2 py-0.5 font-mono text-[10px] font-semibold text-brand mb-4">
                    {t(item.badgeKey)}
                  </span>
                )}

                <p className="text-xs text-text-muted leading-relaxed">
                  {t(item.descriptionKey)}
                </p>

                {item.focusKeys && (
                  <div className="mt-5">
                    <h4 className="font-mono text-[10px] font-bold text-brand uppercase tracking-wider mb-3">
                      {t("about.focus_label")}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {item.focusKeys.map((focusKey) => (
                        <span
                          key={focusKey}
                          className="rounded bg-bg-main border border-border-main px-2 py-0.5 font-mono text-[10px] font-semibold text-fg-main"
                        >
                          {t(focusKey)}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5: Technical Expertise */}
      <section className="mt-20">
        <SectionHeading
          eyebrow={t("about.expertise_eyebrow")}
          title={t("about.expertise_heading")}
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {expertiseData.map((category) => (
            <div
              key={category.id}
              className="rounded-xl border border-border-main bg-bg-card p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-brand/20 bg-brand/5 text-brand">
                  {categoryIcons[category.id]}
                </div>
                <h3 className="text-sm font-extrabold text-fg-main">{t(category.titleKey)}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded bg-bg-main border border-border-main px-2 py-0.5 font-mono text-[10px] font-semibold text-text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6: Languages */}
      <section className="mt-20">
        <SectionHeading
          eyebrow={t("about.languages_eyebrow")}
          title={t("about.languages_heading")}
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {languagesData.map((lang) => (
            <div key={lang.id} className="rounded-xl border border-border-main bg-bg-card p-6">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <Languages size={16} className="text-brand" />
                  <h3 className="text-sm font-extrabold text-fg-main">{t(lang.nameKey)}</h3>
                </div>
                <span className="rounded bg-brand/5 border border-brand/20 px-2 py-0.5 font-mono text-[10px] font-semibold text-brand">
                  {t(lang.levelKey)}
                </span>
              </div>
              {lang.certKey && (
                <p className="text-[11px] text-text-muted font-medium mb-4">{t(lang.certKey)}</p>
              )}
              {/* CEFR segments (A1–C2) */}
              <div className={`flex gap-1 ${lang.certKey ? "" : "mt-6"}`}>
                {Array.from({ length: 6 }, (_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 flex-1 rounded-full ${
                      i < lang.level ? "bg-brand" : "bg-border-main"
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7: Personal Interests */}
      <section className="mt-20">
        <SectionHeading
          eyebrow={t("about.interests_eyebrow")}
          title={t("about.interests_heading")}
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {interestsData.map((interest) => (
            <div
              key={interest.id}
              className="rounded-xl border border-border-main bg-bg-card p-6 bg-grid-pattern"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-brand/20 bg-brand/5 text-brand">
                {interestIcons[interest.id]}
              </div>
              <h3 className="text-sm font-extrabold text-fg-main mb-1">{t(interest.nameKey)}</h3>
              <p className="text-xs text-text-muted leading-relaxed">{t(interest.descKey)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8: Engineering Philosophy */}
      <section className="mt-20">
        <div className="rounded-xl border border-border-main bg-bg-card p-8 sm:p-10 bg-grid-pattern">
          <SectionHeading
            eyebrow={t("about.philosophy_eyebrow")}
            title={t("about.philosophy_heading")}
          />
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6 flex flex-col gap-4">
              <p className="text-sm text-text-muted leading-relaxed">{t("about.philosophy_p1")}</p>
              <p className="text-sm text-text-muted leading-relaxed">{t("about.philosophy_p2")}</p>
            </div>
            <div className="lg:col-span-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {principleIcons.map((icon, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-border-main bg-bg-main p-4"
                >
                  <div className="flex items-center gap-2 mb-2 text-brand">
                    {icon}
                    <h4 className="text-xs font-extrabold text-fg-main">
                      {t(`about.principle_${index + 1}_title`)}
                    </h4>
                  </div>
                  <p className="text-[11px] text-text-muted leading-relaxed">
                    {t(`about.principle_${index + 1}_desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

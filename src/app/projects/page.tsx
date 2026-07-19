"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/i18n/context/LanguageContext";
import { projectsData } from "@/data/portfolioData";
import { Code2, ArrowRight, ExternalLink, GitBranch, Layout } from "lucide-react";

export default function Projects() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<"all" | "saas" | "devops">("all");

  const filteredProjects = projectsData.filter((project) => {
    if (filter === "all") return true;
    if (filter === "saas") {
      // SaaS / Web apps / Web design
      return project.id === "darsio" || project.id === "bedaya" || project.id === "cafe-zeitlos";
    }
    if (filter === "devops") {
      // DevOps and automation pipelines
      return project.id === "ci-cd-practice" || project.id === "darsio"; // Darsio includes automated testing/architecture
    }
    return true;
  });

  const getProjectIcon = (id: string) => {
    switch (id) {
      case "darsio":
        return <Layout size={22} />;
      case "bedaya":
        return <Layout size={22} />;
      case "cafe-zeitlos":
        return <Layout size={22} />;
      case "ci-cd-practice":
        return <GitBranch size={22} />;
      default:
        return <Code2 size={22} />;
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      {/* Title */}
      <div className="border-b border-border-main pb-8 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-fg-main sm:text-4xl">
            {t("projects.page_title")}
          </h1>
          <p className="text-sm text-text-muted mt-2">
            {t("projects.page_subtitle")}
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap gap-2 rounded-lg border border-border-main bg-bg-card p-1 shrink-0 self-start md:self-auto">
          <button
            onClick={() => setFilter("all")}
            className={`rounded-md px-4 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
              filter === "all" ? "bg-brand text-brand-fg" : "text-text-muted hover:text-fg-main"
            }`}
          >
            {t("projects.filter_all")}
          </button>
          <button
            onClick={() => setFilter("saas")}
            className={`rounded-md px-4 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
              filter === "saas" ? "bg-brand text-brand-fg" : "text-text-muted hover:text-fg-main"
            }`}
          >
            {t("projects.filter_saas")}
          </button>
          <button
            onClick={() => setFilter("devops")}
            className={`rounded-md px-4 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
              filter === "devops" ? "bg-brand text-brand-fg" : "text-text-muted hover:text-fg-main"
            }`}
          >
            {t("projects.filter_devops")}
          </button>
        </div>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col rounded-xl border border-border-main bg-bg-card overflow-hidden tech-card-hover"
          >
            {/* Upper Frame */}
            <div className="relative h-48 border-b border-border-main bg-bg-main p-6 bg-grid-pattern flex items-center justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border-2 border-brand/20 bg-bg-card text-brand shadow-sm">
                {getProjectIcon(project.id)}
              </div>
              <div className="absolute top-4 right-4 rounded bg-brand/5 border border-brand/20 px-2 py-0.5 font-mono text-[10px] font-bold text-brand">
                {t(project.categoryKey)}
              </div>
            </div>

            {/* Content Body */}
            <div className="flex-1 flex flex-col p-6">
              <h3 className="text-xl font-black text-fg-main mb-2">
                {t(project.nameKey)}
              </h3>
              <p className="text-xs text-text-muted leading-relaxed mb-6 flex-1">
                {t(project.shortKey)}
              </p>

              {/* Specific metadata list */}
              <div className="border-t border-border-main/60 py-4 flex flex-col gap-2.5 text-xs">
                <div className="flex justify-between items-start gap-2">
                  <span className="font-mono text-[10px] font-bold text-text-muted uppercase tracking-wider">
                    {t("projects.role_label")}
                  </span>
                  <span className="text-fg-main font-semibold text-right">
                    {t(project.roleKey)}
                  </span>
                </div>
                <div className="flex justify-between items-start gap-2 border-t border-border-main/20 pt-2.5">
                  <span className="font-mono text-[10px] font-bold text-text-muted uppercase tracking-wider">
                    {t("projects.status_label")}
                  </span>
                  <span className="text-fg-main font-semibold text-right">
                    {t(project.statusKey)}
                  </span>
                </div>
              </div>

              {/* Technologies */}
              <div className="border-t border-border-main/60 pt-4 mb-6">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-bg-main border border-border-main px-2 py-0.5 font-mono text-[9px] text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-4 mt-auto border-t border-border-main/60 pt-4">
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-4 py-2 text-xs font-bold text-brand-fg hover:bg-brand-hover transition-all cursor-pointer font-sans"
                >
                  <span>{t("projects.details_btn")}</span>
                  <ArrowRight size={12} />
                </Link>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-text-muted hover:text-brand transition-colors"
                  >
                    <span>{t("projects.live_btn")}</span>
                    <ExternalLink size={12} />
                  </a>
                )}
                
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-text-muted hover:text-brand transition-colors"
                  >
                    <span>{t("projects.code_btn")}</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* GitHub Call to action */}
      <div className="rounded-xl border border-border-main bg-bg-card p-6 mt-16 text-center max-w-3xl mx-auto">
        <h3 className="text-lg font-extrabold text-fg-main mb-2">
          {t("projects.more_projects_title")}
        </h3>
        <p className="text-xs text-text-muted leading-relaxed mb-4">
          {t("projects.more_projects_desc")}
        </p>
        <a
          href="https://github.com/EslamMetawie20"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2 text-xs font-semibold text-brand-fg hover:bg-brand-hover transition-all"
        >
          <span>{t("home.cta_github_button")}</span>
          <ExternalLink size={12} />
        </a>
      </div>
    </div>
  );
}

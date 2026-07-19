"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useLanguage } from "@/i18n/context/LanguageContext";
import { projectsData } from "@/data/portfolioData";
import { ArrowLeft, ExternalLink, CheckCircle2, AlertTriangle } from "lucide-react";

interface PageProps {
  params: React.Usable<{
    id: string;
  }>;
}

export default function ProjectDetail({ params }: PageProps) {
  const { t } = useLanguage();
  const { id } = use(params);

  // Find target project
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  // Retrieve features translated array
  // In translations: projects.darsio.features is an array.
  // Since t(key) returns a string (or the key if not found), we can resolve the array manually 
  // from our translations or just map indices 0..5 to render translated bullet items.
  // This is extremely safe and keeps t() simple!
  const featureIndices = [0, 1, 2, 3, 4, 5];

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 animate-fade-in">
      {/* Back Button */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-muted hover:text-brand transition-colors mb-8 group"
      >
        <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
        <span>Back to Projects</span>
      </Link>

      {/* Main Container */}
      <div className="rounded-xl border border-border-main bg-bg-card p-6 md:p-8 shadow-sm">
        
        {/* Title & Category */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-6 border-b border-border-main/60">
          <div>
            <span className="font-mono text-[10px] font-bold text-brand uppercase tracking-widest">
              {t(project.categoryKey)}
            </span>
            <h1 className="text-3xl font-black text-fg-main mt-1 leading-tight">
              {t(project.nameKey)}
            </h1>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-4 py-2 text-xs font-semibold text-white hover:bg-brand-hover transition-all"
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
                className="inline-flex items-center gap-1.5 rounded-lg border border-border-main bg-bg-main px-4 py-2 text-xs font-semibold text-fg-main hover:border-brand transition-all"
              >
                <span>{t("projects.code_btn")}</span>
                <ExternalLink size={12} />
              </a>
            )}
          </div>
        </div>

        {/* Overview Parameters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 border-b border-border-main/60 text-sm">
          <div>
            <span className="font-mono text-[9px] font-bold text-text-muted uppercase tracking-widest block mb-1">
              {t("projects.role_label")}
            </span>
            <span className="text-fg-main font-semibold leading-relaxed">
              {t(project.roleKey)}
            </span>
          </div>
          <div>
            <span className="font-mono text-[9px] font-bold text-text-muted uppercase tracking-widest block mb-1">
              {t("projects.status_label")}
            </span>
            <span className="text-fg-main font-semibold leading-relaxed">
              {t(project.statusKey)}
            </span>
          </div>
          <div>
            <span className="font-mono text-[9px] font-bold text-text-muted uppercase tracking-widest block mb-1">
              Location
            </span>
            <span className="text-fg-main font-semibold leading-relaxed">
              Germany / Web
            </span>
          </div>
        </div>

        {/* Details Copy */}
        <div className="py-6">
          <h2 className="font-mono text-[10px] font-bold text-brand uppercase tracking-wider mb-3">
            {"// Project Overview"}
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            {t(project.descKey)}
          </p>
        </div>

        {/* Dynamic Attribution Block (IBM fork code project only) */}
        {project.attributionKey && (
          <div className="my-6 rounded-lg bg-bg-main border-l-4 border-yellow-500 p-4 flex gap-3 items-start">
            <AlertTriangle className="text-yellow-600 shrink-0 mt-0.5" size={18} />
            <div className="text-xs text-text-muted leading-relaxed">
              <span className="font-bold text-fg-main block mb-1">Educational Attribution Notice</span>
              {t(project.attributionKey)}
            </div>
          </div>
        )}

        {/* Key Capabilities / Features */}
        <div className="py-6 border-t border-border-main/60">
          <h2 className="font-mono text-[10px] font-bold text-brand uppercase tracking-wider mb-4">
            {"// Implemented Capabilities & Features"}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featureIndices.map((idx) => {
              const itemKey = `${project.featuresKey}.${idx}`;
              const text = t(itemKey);
              // If the translated key equals the path (meaning no item at this index), skip rendering
              if (text === itemKey) return null;

              return (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-fg-main leading-relaxed">
                  <span className="text-success mt-0.5 shrink-0">
                    <CheckCircle2 size={15} />
                  </span>
                  <span>{text}</span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Technologies Grid */}
        <div className="py-6 border-t border-border-main/60">
          <h2 className="font-mono text-[10px] font-bold text-brand uppercase tracking-wider mb-4">
            {"// Technologies & Libraries Used"}
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded bg-bg-main border border-border-main px-3 py-1 font-mono text-[10px] text-text-muted font-bold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

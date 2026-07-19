"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/i18n/context/LanguageContext";
import { projectsData } from "@/data/portfolioData";
import { PipelineVisual } from "@/components/ui/PipelineVisual";
import { ArrowRight, ExternalLink, Code2, GitBranch, Server } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "@/components/ui/SocialIcons";

export default function Home() {
  const { t } = useLanguage();

  // Pick first 3 projects for the home page showcase
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-grid-pattern py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start gap-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-3 py-1 font-mono text-xs font-semibold text-brand">
                <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
                {t("common.status_current")}
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-fg-main sm:text-5xl lg:text-6xl font-sans leading-none">
                {t("common.full_name")}
                <span className="block text-brand mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold font-sans">
                  {t("hero.title")}
                </span>
              </h1>

              <p className="text-lg font-semibold text-fg-main leading-relaxed tracking-wide">
                {t("hero.subtitle")}
              </p>

              <p className="text-sm text-text-muted leading-relaxed max-w-2xl">
                {t("hero.description")}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                <Link
                  href="/projects"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-hover transition-all cursor-pointer font-sans"
                >
                  <span>{t("hero.explore_cta")}</span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-border-main bg-bg-card px-6 py-3 text-sm font-semibold text-fg-main hover:border-brand hover:text-brand transition-all cursor-pointer font-sans"
                >
                  <span>{t("hero.contact_cta")}</span>
                </Link>
              </div>

              {/* Quick Profile Links */}
              <div className="flex items-center gap-4 mt-2">
                <a
                  href="https://github.com/EslamMetawie20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-semibold text-text-muted hover:text-brand transition-colors"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
                <span className="text-border-main">|</span>
                <a
                  href="https://www.linkedin.com/in/eslam-metawie/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-semibold text-text-muted hover:text-brand transition-colors"
                >
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Right Profile Placeholder Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative h-72 w-72 sm:h-80 sm:w-80 rounded-2xl border border-border-main bg-bg-card p-4 shadow-xl select-none group">
                {/* Tech dots decoration */}
                <div className="absolute top-2 left-2 flex gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                  <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                </div>
                <div className="absolute top-2 right-4 font-mono text-[9px] text-text-muted">
                  MET_AVATAR_v1.0
                </div>

                {/* Profile Placeholder SVG */}
                <div className="flex h-full w-full flex-col items-center justify-center rounded-xl border border-border-main/60 bg-bg-main/40 p-4 transition-all duration-300 group-hover:border-brand">
                  <svg
                    className="h-28 w-28 text-text-muted transition-colors duration-300 group-hover:text-brand"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div className="mt-4 font-sans font-black text-lg tracking-wider text-fg-main uppercase">
                    {t("common.full_name")}
                  </div>
                  <div className="mt-1 font-mono text-[10px] text-text-muted text-center max-w-[200px]">
                    {t("common.status_current")}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Introduction & Grid Focus Section */}
      <section className="border-t border-border-main bg-bg-card py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-brand mb-2">
              {"// Executive Introduction"}
            </h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-fg-main sm:text-4xl mb-6">
              {t("home.intro_title")}
            </h3>
            <p className="text-sm text-text-muted leading-relaxed mb-4">
              {t("home.intro_text_1")}
            </p>
            <p className="text-sm text-text-muted leading-relaxed">
              {t("home.intro_text_2")}
            </p>
          </div>

          {/* Three Core Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mt-12">
            {/* SW Dev */}
            <div className="rounded-xl border border-border-main bg-bg-main p-6 tech-card-hover">
              <div className="h-10 w-10 rounded-lg bg-brand/5 border border-brand/10 flex items-center justify-center text-brand mb-4">
                <Code2 size={20} />
              </div>
              <h4 className="text-base font-extrabold text-fg-main mb-2">
                {t("home.focus_sw")}
              </h4>
              <p className="text-xs text-text-muted leading-relaxed">
                {t("home.focus_sw_desc")}
              </p>
            </div>

            {/* DevOps */}
            <div className="rounded-xl border border-border-main bg-bg-main p-6 tech-card-hover">
              <div className="h-10 w-10 rounded-lg bg-brand/5 border border-brand/10 flex items-center justify-center text-brand mb-4">
                <GitBranch size={20} />
              </div>
              <h4 className="text-base font-extrabold text-fg-main mb-2">
                {t("home.focus_devops")}
              </h4>
              <p className="text-xs text-text-muted leading-relaxed">
                {t("home.focus_devops_desc")}
              </p>
            </div>

            {/* Cloud */}
            <div className="rounded-xl border border-border-main bg-bg-main p-6 tech-card-hover">
              <div className="h-10 w-10 rounded-lg bg-brand/5 border border-brand/10 flex items-center justify-center text-brand mb-4">
                <Server size={20} />
              </div>
              <h4 className="text-base font-extrabold text-fg-main mb-2">
                {t("home.focus_infra")}
              </h4>
              <p className="text-xs text-text-muted leading-relaxed">
                {t("home.focus_infra_desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Pipeline Visual Section */}
      <section className="border-t border-border-main py-16 lg:py-20 bg-bg-main">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-brand mb-2">
                {"// Automation Pipelines"}
              </h2>
              <h3 className="text-3xl font-extrabold tracking-tight text-fg-main sm:text-4xl mb-6">
                Reliable Delivery Infrastructure
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Release cycles should never rely on memory or repetitive manual sequences. I build pipelines that compile code, execute checks, package installers, and trigger staging updates in a structured, observable path.
              </p>
            </div>
            <div className="lg:col-span-7">
              <PipelineVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Selected Projects Showcase */}
      <section className="border-t border-border-main bg-bg-card py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-brand mb-2">
                {"// Portfolio Excerpts"}
              </h2>
              <h3 className="text-3xl font-extrabold tracking-tight text-fg-main sm:text-4xl">
                {t("home.projects_heading")}
              </h3>
              <p className="text-sm text-text-muted mt-2">
                {t("home.projects_sub")}
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-brand-hover transition-colors font-sans"
            >
              <span>{t("home.projects_view_all")}</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col rounded-xl border border-border-main bg-bg-main overflow-hidden tech-card-hover"
              >
                {/* Visual Header */}
                <div className="relative h-44 bg-bg-card border-b border-border-main flex items-center justify-center p-6 bg-grid-pattern">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-brand/20 bg-bg-main text-brand">
                    <Code2 size={24} />
                  </div>
                  <div className="absolute top-2 right-3 rounded bg-brand/5 border border-brand/10 px-2 py-0.5 font-mono text-[9px] font-semibold text-brand">
                    {t(project.categoryKey)}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col p-6">
                  <h4 className="text-lg font-black text-fg-main mb-2">
                    {t(project.nameKey)}
                  </h4>
                  <p className="text-xs text-text-muted leading-relaxed mb-4 flex-1">
                    {t(project.shortKey)}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded bg-bg-card border border-border-main px-2 py-0.5 font-mono text-[9px] text-text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="font-mono text-[9px] text-text-muted pl-1">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand hover:underline"
                  >
                    <span>{t("projects.details_btn")}</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network CTAs Section */}
      <section className="border-t border-border-main py-16 bg-bg-main">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Github Card */}
            <div className="rounded-xl border border-border-main bg-bg-card p-6 flex flex-col justify-between items-start gap-4">
              <div>
                <div className="text-brand mb-3">
                  <Github size={28} />
                </div>
                <h4 className="text-lg font-extrabold text-fg-main mb-1">
                  {t("home.cta_github_title")}
                </h4>
                <p className="text-xs text-text-muted leading-relaxed">
                  {t("home.cta_github_desc")}
                </p>
              </div>
              <a
                href="https://github.com/EslamMetawie20"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border-main bg-bg-main px-4 py-2 text-xs font-semibold text-fg-main hover:border-brand hover:text-brand transition-all cursor-pointer"
              >
                <span>{t("home.cta_github_button")}</span>
                <ExternalLink size={12} />
              </a>
            </div>

            {/* LinkedIn Card */}
            <div className="rounded-xl border border-border-main bg-bg-card p-6 flex flex-col justify-between items-start gap-4">
              <div>
                <div className="text-brand mb-3">
                  <Linkedin size={28} />
                </div>
                <h4 className="text-lg font-extrabold text-fg-main mb-1">
                  {t("home.cta_linkedin_title")}
                </h4>
                <p className="text-xs text-text-muted leading-relaxed">
                  {t("home.cta_linkedin_desc")}
                </p>
              </div>
              <a
                href="https://www.linkedin.com/in/eslam-metawie/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border-main bg-bg-main px-4 py-2 text-xs font-semibold text-fg-main hover:border-brand hover:text-brand transition-all cursor-pointer"
              >
                <span>{t("home.cta_linkedin_button")}</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Global Contact CTA banner */}
      <section className="border-t border-border-main bg-brand text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-4">
          <h3 className="text-2xl font-black md:text-3xl font-sans">
            Need reliable software pipelines or custom development?
          </h3>
          <p className="text-sm text-brand-hover/90 max-w-xl leading-relaxed">
            Let&apos;s build a repeatable and robust release infrastructure. Open to exchange ideas and collaborate.
          </p>
          <Link
            href="/contact"
            className="mt-2 inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-bold text-brand hover:bg-bg-main transition-all font-sans"
          >
            {t("hero.contact_cta")}
          </Link>
        </div>
      </section>
    </div>
  );
}

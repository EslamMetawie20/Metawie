"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/i18n/context/LanguageContext";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "@/components/ui/SocialIcons";

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border-main bg-bg-card py-8 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Rights */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2 font-sans font-extrabold uppercase tracking-widest text-base text-fg-main select-none">
              <Image
                src="/logo.png"
                alt="METAWIE Logo"
                width={24}
                height={24}
                className="h-6 w-6 object-contain dark:invert dark:hue-rotate-180"
              />
              <span>METAWIE</span>
            </div>
            <p className="text-xs text-text-muted mt-1 text-center md:text-left">
              &copy; {currentYear} {t("common.full_name")}. {t("footer.rights")}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/EslamMetawie20"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-border-main bg-bg-main text-text-muted hover:text-brand hover:border-brand transition-all"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/eslam-metawie/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-border-main bg-bg-main text-text-muted hover:text-brand hover:border-brand transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6 text-xs font-semibold text-text-muted">
            <Link href="/privacy" className="hover:text-brand transition-colors">
              {t("footer.privacy")}
            </Link>
            <Link href="/impressum" className="hover:text-brand transition-colors">
              {t("footer.impressum")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

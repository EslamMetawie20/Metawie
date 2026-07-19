"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage, Language } from "@/i18n/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { Menu, X, Sun, Moon, Globe, Download, AlertCircle } from "lucide-react";

export const Navbar: React.FC = () => {
  const { language, dir, t, changeLanguage, mounted: langMounted } = useLanguage();
  const { theme, toggleTheme, mounted: themeMounted } = useTheme();
  
  const [isOpen, setIsOpen] = useState(false);
  const [showCvModal, setShowCvModal] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile navigation on route change
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(false), 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close dropdowns on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setLangDropdownOpen(false);
        setShowCvModal(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/experience", label: t("nav.experience") },
    { href: "/projects", label: t("nav.projects") },
    { href: "/skills", label: t("nav.skills") },
    { href: "/contact", label: t("nav.contact") },
  ];

  const languagesList: { code: Language; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "de", label: "DE" },
    { code: "ar", label: "AR" },
  ];

  const handleCvClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowCvModal(true);
  };

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border-main bg-bg-main/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo / Brand */}
          <div className="flex items-center">
            <Link 
              href="/" 
              className="flex items-center select-none"
              aria-label="METAWIE Home"
            >
              <Image
                src="/logo-with-name.png"
                alt="METAWIE Logo"
                width={122}
                height={36}
                className="h-9 w-auto object-contain dark:invert dark:hue-rotate-180"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Desktop Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand ${
                  isActive(link.href)
                    ? "text-brand font-semibold"
                    : "text-text-muted"
                }`}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Controls & Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-border-main bg-bg-card text-text-muted hover:text-brand hover:border-brand transition-all cursor-pointer"
              aria-label={themeMounted && theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {themeMounted && theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 p-2 rounded-lg border border-border-main bg-bg-card text-text-muted hover:text-brand hover:border-brand transition-all cursor-pointer text-sm font-semibold"
                aria-label="Change Language"
                aria-expanded={langDropdownOpen}
              >
                <Globe size={18} />
                <span>{langMounted ? language.toUpperCase() : "EN"}</span>
              </button>
              {langDropdownOpen && (
                <div 
                  className={`absolute mt-2 w-24 rounded-lg border border-border-main bg-bg-card p-1 shadow-lg ${
                    dir === "rtl" ? "left-0" : "right-0"
                  }`}
                >
                  {languagesList.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full rounded-md px-3 py-1.5 text-center text-xs font-semibold hover:bg-brand/10 hover:text-brand transition-all cursor-pointer ${
                        langMounted && language === lang.code ? "text-brand bg-brand/5" : "text-text-muted"
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Download CV */}
            <button
              onClick={handleCvClick}
              className="flex items-center gap-2 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-brand-fg hover:bg-brand-hover transition-all cursor-pointer font-sans"
            >
              <Download size={16} />
              <span>{t("common.cv_download")}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Theme Toggle (Mobile Header) */}
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-lg border border-border-main bg-bg-card text-text-muted hover:text-brand transition-all"
              aria-label="Toggle Theme"
            >
              {themeMounted && theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Language Switcher (Mobile Header) */}
            <button
              onClick={() => {
                const nextLangMap: Record<Language, Language> = { en: "de", de: "ar", ar: "en" };
                changeLanguage(nextLangMap[language] || "en");
              }}
              className="flex items-center gap-1 p-1.5 rounded-lg border border-border-main bg-bg-card text-text-muted hover:text-brand transition-all text-xs font-semibold"
              aria-label="Switch Language Quick"
            >
              <Globe size={16} />
              <span>{langMounted ? language.toUpperCase() : "EN"}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-text-muted hover:text-brand"
              aria-expanded={isOpen}
              aria-label="Toggle Main Navigation Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="fixed inset-0 top-16 z-40 bg-bg-main md:hidden animate-fade-in">
            <div className="flex flex-col h-[calc(100vh-4rem)] p-6 justify-between">
              <nav className="flex flex-col gap-6" aria-label="Mobile Navigation">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-xl font-medium transition-colors hover:text-brand ${
                      isActive(link.href)
                        ? "text-brand font-semibold border-l-2 border-brand pl-3 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-3"
                        : "text-text-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              
              {/* Drawer Footer Action */}
              <div className="mb-8">
                <button
                  onClick={(e) => {
                    setIsOpen(false);
                    handleCvClick(e);
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand py-3 text-base font-semibold text-brand-fg hover:bg-brand-hover transition-all"
                >
                  <Download size={18} />
                  <span>{t("common.cv_download")}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* CV Placeholder Modal */}
      {showCvModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm animate-fade-in">
          <div 
            className="w-full max-w-md rounded-xl border border-border-main bg-bg-card p-6 shadow-2xl animate-slide-up"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="flex items-center gap-3 text-brand mb-4">
              <AlertCircle size={24} />
              <h3 id="modal-title" className="text-lg font-bold text-fg-main">
                {t("common.cv_download")}
              </h3>
            </div>
            <p className="text-sm text-text-muted mb-6 leading-relaxed">
              {t("common.cv_not_available")}
            </p>
            <div className="flex justify-end gap-3">
              <Link
                href="/contact"
                onClick={() => setShowCvModal(false)}
                className="rounded-lg bg-brand px-4 py-2 text-xs font-semibold text-brand-fg hover:bg-brand-hover transition-all"
              >
                {t("nav.contact")}
              </Link>
              <button
                onClick={() => setShowCvModal(false)}
                className="rounded-lg border border-border-main bg-transparent px-4 py-2 text-xs font-semibold text-text-muted hover:text-fg-main transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

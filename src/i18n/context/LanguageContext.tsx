"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import en from "../locales/en.json";
import de from "../locales/de.json";
import ar from "../locales/ar.json";

export type Language = "en" | "de" | "ar";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const translations: Record<Language, any> = { en, de, ar };

interface LanguageContextType {
  language: Language;
  dir: "ltr" | "rtl";
  t: (key: string) => string;
  changeLanguage: (lang: Language) => void;
  mounted: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Detect language on first load
    const storedLang = localStorage.getItem("metawie_lang") as Language;
    let initialLang: Language = "en";
    if (storedLang && (storedLang === "en" || storedLang === "de" || storedLang === "ar")) {
      initialLang = storedLang;
    } else {
      const browserLang = navigator.language.split("-")[0];
      if (browserLang === "de") {
        initialLang = "de";
      } else if (browserLang === "ar") {
        initialLang = "ar";
      }
    }
    const timer = setTimeout(() => {
      setLanguage(initialLang);
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    // Save to localStorage and update HTML attribute
    localStorage.setItem("metawie_lang", language);
    const html = document.documentElement;
    html.setAttribute("lang", language);
    html.setAttribute("dir", language === "ar" ? "rtl" : "ltr");
  }, [language, mounted]);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let current = translations[language] || translations["en"];
    
    for (const k of keys) {
      if (current && typeof current === "object" && k in current) {
        current = current[k];
      } else {
        // Fallback to English if key not found in current language
        let fallback = translations["en"];
        for (const fk of keys) {
          if (fallback && typeof fallback === "object" && fk in fallback) {
            fallback = fallback[fk];
          } else {
            return key; // return key as fallback
          }
        }
        return typeof fallback === "string" ? fallback : key;
      }
    }

    return typeof current === "string" ? current : key;
  };

  const dir = language === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ language, dir, t, changeLanguage, mounted }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

"use client";

import React from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/i18n/context/LanguageContext";

export const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <LanguageProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </LanguageProvider>
  );
};

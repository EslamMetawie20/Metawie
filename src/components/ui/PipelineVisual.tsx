"use client";

import React, { useState } from "react";
import { useLanguage } from "@/i18n/context/LanguageContext";
import { Code, Cpu, ShieldCheck, Box, Server, CheckCircle2 } from "lucide-react";

export const PipelineVisual: React.FC = () => {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState<number | null>(null);

  // Stage labels are established technical terms and stay in English in every language.
  const steps = [
    {
      id: 0,
      icon: <Code size={20} />,
      label: "Code",
      desc: t("pipeline.desc_code"),
    },
    {
      id: 1,
      icon: <Cpu size={20} />,
      label: "Build",
      desc: t("pipeline.desc_build"),
    },
    {
      id: 2,
      icon: <ShieldCheck size={20} />,
      label: "Test",
      desc: t("pipeline.desc_test"),
    },
    {
      id: 3,
      icon: <Box size={20} />,
      label: "Package",
      desc: t("pipeline.desc_package"),
    },
    {
      id: 4,
      icon: <Server size={20} />,
      label: "Deploy",
      desc: t("pipeline.desc_deploy"),
    },
  ];

  return (
    <div className="w-full rounded-xl border border-border-main bg-bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-mono text-sm font-semibold tracking-wider text-brand uppercase">
          {t("pipeline.flow_title")}
        </h3>
        <div className="flex items-center gap-1.5 text-xs text-success font-semibold">
          <CheckCircle2 size={14} />
          <span>{t("pipeline.stable")}</span>
        </div>
      </div>

      {/* SVG Pipeline Line — always LTR so the stage order stays Code -> Deploy in RTL locales */}
      <div dir="ltr" className="relative flex flex-col md:flex-row justify-between items-center gap-8 py-4">
        {/* Connection line (Desktop only) */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border-main -translate-y-1/2 hidden md:block z-0" />
        
        {/* Animated active progress connection line (Desktop only) */}
        {activeStep !== null && (
          <div 
            className="absolute top-1/2 left-0 h-0.5 bg-brand -translate-y-1/2 hidden md:block z-0 transition-all duration-500 ease-out" 
            style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
          />
        )}

        {steps.map((step) => {
          const isActive = activeStep !== null && activeStep >= step.id;
          const isCurrent = activeStep === step.id;

          return (
            <div 
              key={step.id} 
              className="relative z-10 flex flex-col items-center group cursor-pointer"
              onMouseEnter={() => setActiveStep(step.id)}
              onMouseLeave={() => setActiveStep(null)}
            >
              {/* Node Circle */}
              <div 
                className={`flex h-12 w-12 items-center justify-center rounded-full border-2 bg-bg-card transition-all duration-300 ${
                  isCurrent 
                    ? "border-brand text-brand scale-110 shadow-[0_0_15px_var(--selection-bg)]"
                    : isActive 
                      ? "border-brand text-brand" 
                      : "border-border-main text-text-muted group-hover:border-brand group-hover:text-brand"
                }`}
              >
                {step.icon}
              </div>

              {/* Node Label */}
              <span 
                className={`mt-2 font-mono text-xs font-bold uppercase transition-colors duration-300 ${
                  isActive ? "text-brand" : "text-fg-main group-hover:text-brand"
                }`}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Dynamic Detail Card */}
      <div className="mt-6 rounded-lg bg-bg-main/50 border border-border-main p-4 min-h-[76px] transition-all duration-300">
        {activeStep !== null ? (
          <div>
            <span className="font-mono text-xs font-bold text-brand uppercase tracking-wider">
              {t("pipeline.phase_label").replace("{label}", steps[activeStep].label)}
            </span>
            <p className="text-sm text-fg-main mt-1">
              {steps[activeStep].desc}
            </p>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-xs font-semibold text-text-muted font-mono py-2">
            {t("pipeline.hover_hint")}
          </div>
        )}
      </div>
    </div>
  );
};

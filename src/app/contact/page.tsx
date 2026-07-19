"use client";

import React, { useState } from "react";
import { useLanguage } from "@/i18n/context/LanguageContext";
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Info } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "@/components/ui/SocialIcons";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  consent?: string;
}

export default function Contact() {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = t("contact.validation_required");
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t("contact.validation_required");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t("contact.validation_email");
    }

    if (!formData.subject.trim()) {
      newErrors.subject = t("contact.validation_required");
    }

    if (!formData.message.trim()) {
      newErrors.message = t("contact.validation_required");
    }

    if (!formData.consent) {
      newErrors.consent = t("contact.validation_consent");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
      if (errors.consent) setErrors((prev) => ({ ...prev, consent: undefined }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulation of form processing (e.g. Formspree/Web3Forms/Next.js API route)
    // Developers can wire this up using process.env.NEXT_PUBLIC_FORM_ENDPOINT
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulating network latency
      
      console.log("Form successfully submitted:", formData);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        consent: false,
      });
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      {/* Title */}
      <div className="border-b border-border-main pb-8 mb-12">
        <h1 className="text-3xl font-extrabold tracking-tight text-fg-main sm:text-4xl">
          {t("contact.page_title")}
        </h1>
        <p className="text-sm text-text-muted mt-2">
          {t("contact.page_subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        
        {/* Left column: Availability & Info */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="rounded-xl border border-border-main bg-bg-card p-6 bg-grid-pattern">
            <h2 className="text-base font-extrabold text-fg-main mb-4 flex items-center gap-2">
              <Info size={18} className="text-brand" />
              <span>{t("contact.info_title")}</span>
            </h2>

            <div className="flex flex-col gap-4 text-xs">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-text-muted shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-fg-main block mb-0.5">{t("contact.location_label")}</span>
                  <span className="text-text-muted">Ostfalia / Braunschweig / Lower Saxony, Germany</span>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-border-main/60 pt-4">
                <Mail size={16} className="text-text-muted shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-fg-main block mb-0.5">Email</span>
                  <span className="text-text-muted select-all">e.metawie@ggu-software.com</span>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-border-main/60 pt-4">
                <CheckCircle className="text-success shrink-0 mt-0.5" size={16} />
                <div>
                  <span className="font-bold text-fg-main block mb-0.5">{t("contact.status_label")}</span>
                  <span className="text-text-muted leading-relaxed">{t("contact.status_value")}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social connections */}
          <div className="flex gap-4">
            <a
              href="https://github.com/EslamMetawie20"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-border-main bg-bg-card py-3 text-xs font-semibold text-text-muted hover:text-brand hover:border-brand transition-all"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/eslam-metawie/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-border-main bg-bg-card py-3 text-xs font-semibold text-text-muted hover:text-brand hover:border-brand transition-all"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Right column: Form */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="rounded-xl border border-border-main bg-bg-card p-6 md:p-8 flex flex-col gap-5 shadow-sm">
            
            {/* Status alerts */}
            {submitStatus === "success" && (
              <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-4 flex gap-3 text-xs text-emerald-800 dark:text-emerald-300">
                <CheckCircle size={18} className="shrink-0 text-emerald-600 dark:text-emerald-400" />
                <div>
                  <span className="font-bold block mb-0.5">{t("contact.success_title")}</span>
                  <span>{t("contact.success_message")}</span>
                </div>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="rounded-lg bg-rose-500/10 border border-rose-500/20 p-4 flex gap-3 text-xs text-rose-800 dark:text-rose-300">
                <AlertCircle size={18} className="shrink-0 text-rose-600 dark:text-rose-400" />
                <div>
                  <span className="font-bold block mb-0.5">{t("contact.error_title")}</span>
                  <span>{t("contact.error_message")}</span>
                </div>
              </div>
            )}

            {/* Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-[10px] font-bold text-text-muted uppercase tracking-wider font-mono">
                  {t("contact.form_name")} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`rounded-lg border bg-transparent px-3.5 py-2.5 text-xs text-fg-main outline-none transition-all ${
                    errors.name ? "border-rose-500 focus:border-rose-500" : "border-border-main focus:border-brand"
                  }`}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <span id="name-error" className="text-[10px] text-rose-600 dark:text-rose-400 font-semibold mt-0.5">
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-[10px] font-bold text-text-muted uppercase tracking-wider font-mono">
                  {t("contact.form_email")} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`rounded-lg border bg-transparent px-3.5 py-2.5 text-xs text-fg-main outline-none transition-all ${
                    errors.email ? "border-rose-500 focus:border-rose-500" : "border-border-main focus:border-brand"
                  }`}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <span id="email-error" className="text-[10px] text-rose-600 dark:text-rose-400 font-semibold mt-0.5">
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="subject" className="text-[10px] font-bold text-text-muted uppercase tracking-wider font-mono">
                {t("contact.form_subject")} *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`rounded-lg border bg-transparent px-3.5 py-2.5 text-xs text-fg-main outline-none transition-all ${
                  errors.subject ? "border-rose-500 focus:border-rose-500" : "border-border-main focus:border-brand"
                }`}
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? "subject-error" : undefined}
              />
              {errors.subject && (
                <span id="subject-error" className="text-[10px] text-rose-600 dark:text-rose-400 font-semibold mt-0.5">
                  {errors.subject}
                </span>
              )}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-[10px] font-bold text-text-muted uppercase tracking-wider font-mono">
                {t("contact.form_message")} *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`rounded-lg border bg-transparent px-3.5 py-2.5 text-xs text-fg-main outline-none transition-all resize-none ${
                  errors.message ? "border-rose-500 focus:border-rose-500" : "border-border-main focus:border-brand"
                }`}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <span id="message-error" className="text-[10px] text-rose-600 dark:text-rose-400 font-semibold mt-0.5">
                  {errors.message}
                </span>
              )}
            </div>

            {/* Privacy Consent Checkbox */}
            <div className="flex flex-col gap-1">
              <div className="flex items-start gap-2.5">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="mt-1 h-3.5 w-3.5 rounded border-border-main accent-brand cursor-pointer shrink-0"
                  aria-invalid={!!errors.consent}
                  aria-describedby={errors.consent ? "consent-error" : undefined}
                />
                <label htmlFor="consent" className="text-[11px] text-text-muted leading-relaxed cursor-pointer select-none">
                  {t("contact.form_consent")}
                </label>
              </div>
              {errors.consent && (
                <span id="consent-error" className="text-[10px] text-rose-600 dark:text-rose-400 font-semibold mt-0.5 pl-6 rtl:pl-0 rtl:pr-6">
                  {errors.consent}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-brand py-3 text-xs font-semibold text-brand-fg hover:bg-brand-hover transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Send size={14} />
              <span>{isSubmitting ? t("contact.form_sending") : t("contact.form_submit")}</span>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

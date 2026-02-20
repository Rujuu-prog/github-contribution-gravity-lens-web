"use client";

import { motion } from "motion/react";
import { CopyButton } from "@/components/atoms/copy-button";
import { REPO_URL, NPX_COMMAND, ACTIONS_URL } from "@/lib/constants";
import { useI18n } from "@/lib/i18n-context";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ActionsIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1.08-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1.08 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1.08z" />
    </svg>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export function CtaSection() {
  const { t } = useI18n();

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col items-center gap-6"
      aria-label="Get started"
    >
      <h2 className="text-lg font-semibold text-slate-200">{t("cta.title")}</h2>

      <motion.div
        variants={itemVariants}
        className="w-full rounded-xl border border-slate-800 bg-slate-950 overflow-hidden"
      >
        {/* macOS-style window decoration */}
        <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-2.5">
          <span className="h-3 w-3 rounded-full bg-red-500/80" aria-hidden="true" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" aria-hidden="true" />
          <span className="h-3 w-3 rounded-full bg-green-500/80" aria-hidden="true" />
          <span className="ml-2 text-xs text-slate-500">terminal</span>
        </div>

        {/* Command block */}
        <div className="flex items-center gap-3 px-4 py-3">
          <span className="select-none text-sm text-emerald-400" aria-hidden="true">$</span>
          <code className="flex-1 text-sm text-white font-mono">{NPX_COMMAND}</code>
          <CopyButton text={NPX_COMMAND} label={t("cta.cli_copy")} />
        </div>
      </motion.div>

      {/* Links area */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6"
      >
        <a
          href={ACTIONS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-white"
        >
          <ActionsIcon className="h-4 w-4" />
          {t("cta.actions")}
          <span aria-hidden="true">&rarr;</span>
        </a>
        <a
          href={REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-white"
        >
          <GitHubIcon className="h-4 w-4" />
          {t("cta.star")}
          <span aria-hidden="true">&rarr;</span>
        </a>
      </motion.div>
    </motion.section>
  );
}

"use client";

import { motion } from "motion/react";
import { EmbedCodeBlock } from "@/components/molecules/embed-code-block";
import { DownloadButton } from "@/components/molecules/download-button";
import { useI18n } from "@/lib/i18n-context";

interface EmbedSectionProps {
  svgString: string;
  username: string;
  theme: string;
}

export function EmbedSection({ svgString, username, theme }: EmbedSectionProps) {
  const { t } = useI18n();

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" as const }}
      className="flex flex-col gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-6 backdrop-blur-sm"
      aria-label="Embed and download"
    >
      <h2 className="text-sm font-semibold text-slate-200">
        {t("embed.title")}
      </h2>

      <EmbedCodeBlock username={username} theme={theme} />

      <DownloadButton svgString={svgString} username={username} />
    </motion.section>
  );
}

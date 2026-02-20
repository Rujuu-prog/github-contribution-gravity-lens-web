"use client";

import { useMemo, useEffect, useState } from "react";
import { motion } from "motion/react";
import { generateDemoData, renderSvg } from "github-contribution-gravity-lens";
import { useI18n } from "@/lib/i18n-context";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function Hero() {
  const { t } = useI18n();
  const [blobUrl, setBlobUrl] = useState<string | null>(null);

  const demoSvg = useMemo(() => {
    const days = generateDemoData();
    return renderSvg(days, { theme: "deep-space", strength: 0.35 });
  }, []);

  useEffect(() => {
    const blob = new Blob([demoSvg], {
      type: "image/svg+xml;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    setBlobUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [demoSvg]);

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center gap-8 text-center"
      aria-label="Hero"
    >
      {/* Title */}
      <motion.h1
        variants={itemVariants}
        className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
      >
        <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
          {t("hero.title1")}
        </span>
        <br />
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          {t("hero.title2")}
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        variants={itemVariants}
        className="max-w-xl text-base text-slate-400 sm:text-lg"
      >
        {t("hero.subtitle")}
      </motion.p>

      {/* Demo SVG */}
      <motion.div
        variants={itemVariants}
        className="w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-950 p-4"
      >
        {blobUrl && (
          <object
            data={blobUrl}
            type="image/svg+xml"
            className="w-full mx-auto block"
            aria-label="Demo gravity lens SVG"
          />
        )}
      </motion.div>
    </motion.section>
  );
}

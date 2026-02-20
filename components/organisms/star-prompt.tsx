"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { REPO_URL } from "@/lib/constants";
import { useI18n } from "@/lib/i18n-context";

interface StarPromptProps {
  visible: boolean;
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .587l3.668 7.568L24 9.306l-6 5.862 1.416 8.245L12 19.446l-7.416 3.967L6 15.168 0 9.306l8.332-1.151z" />
    </svg>
  );
}

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
    </svg>
  );
}

export function StarPrompt({ visible }: StarPromptProps) {
  const { t } = useI18n();
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 24 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.8 }}
          className="fixed bottom-6 right-6 z-50 w-80 overflow-hidden rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-950/90 via-slate-900/95 to-blue-950/90 p-6 shadow-2xl backdrop-blur-md"
        >
          {/* Sparkle decorations */}
          <SparkleIcon className="absolute top-3 right-4 h-3 w-3 text-purple-400/40" />
          <SparkleIcon className="absolute bottom-4 left-6 h-2.5 w-2.5 text-blue-400/30" />
          <SparkleIcon className="absolute top-6 left-12 h-2 w-2 text-cyan-400/25" />

          <div className="relative flex flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-2">
              <StarIcon className="h-5 w-5 text-amber-400" />
              <h3 className="text-base font-semibold text-white">
                {t("star.title")}
              </h3>
            </div>

            <p className="max-w-sm text-sm text-slate-300">
              {t("star.description")}
            </p>

            <div className="flex items-center gap-3">
              <motion.a
                href={REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-purple-500/25"
              >
                <StarIcon className="h-4 w-4" />
                {t("star.button")}
              </motion.a>

              <button
                type="button"
                onClick={() => setDismissed(true)}
                className="rounded-lg px-3 py-2 text-sm text-slate-400 transition-colors hover:text-slate-200 cursor-pointer"
              >
                {t("star.dismiss")}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import { motion } from "motion/react";
import { Button } from "@/components/atoms/button";
import { useI18n } from "@/lib/i18n-context";

interface ErrorDisplayProps {
  message: string;
  onRetry: () => void;
}

function AlertIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-red-400"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

export function ErrorDisplay({ message, onRetry }: ErrorDisplayProps) {
  const { t } = useI18n();

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      role="alert"
      className="flex flex-col items-center gap-4 rounded-xl border border-red-500/30 bg-red-500/5 p-6 text-center"
    >
      <AlertIcon />

      <p className="text-sm text-red-300">{message}</p>

      <Button variant="secondary" onClick={onRetry} className="border-red-500/40 text-red-300 hover:border-red-400 hover:text-red-200">
        {t("error.retry")}
      </Button>
    </motion.div>
  );
}

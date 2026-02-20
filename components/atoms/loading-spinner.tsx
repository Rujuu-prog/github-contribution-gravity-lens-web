"use client";

import { motion } from "motion/react";

interface LoadingSpinnerProps {
  size?: number;
}

export function LoadingSpinner({ size = 24 }: LoadingSpinnerProps) {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      role="status"
      aria-label="Loading"
      style={{ width: size, height: size }}
      className="rounded-full border-2 border-slate-600 border-t-purple-500"
    />
  );
}

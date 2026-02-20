"use client";

import { AnimatePresence, motion } from "motion/react";

interface ToastProps {
  message: string;
  visible: boolean;
}

export function Toast({ message, visible }: ToastProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, x: 0 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-slate-100 shadow-lg shadow-black/30"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

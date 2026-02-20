"use client";

import { useMemo, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LoadingSpinner } from "@/components/atoms/loading-spinner";
import { useI18n } from "@/lib/i18n-context";

interface SvgPreviewProps {
  svgString: string | null;
  loading: boolean;
}

export function SvgPreview({ svgString, loading }: SvgPreviewProps) {
  const { t } = useI18n();
  const [blobUrl, setBlobUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!svgString) {
      setBlobUrl(null);
      return;
    }
    const blob = new Blob([svgString], {
      type: "image/svg+xml;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    setBlobUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [svgString]);

  if (svgString && !loading && blobUrl) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="svg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-950 p-4"
        >
          <object
            data={blobUrl}
            type="image/svg+xml"
            className="w-full mx-auto block"
            aria-label="Generated SVG preview"
          />
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center py-24"
          >
            <LoadingSpinner size={40} />
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center py-24 text-sm text-slate-500"
          >
            {t("generator.empty")}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

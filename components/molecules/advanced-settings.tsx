"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Slider } from "@/components/atoms/slider";
import { useI18n } from "@/lib/i18n-context";

interface AdvancedSettingsProps {
  strength: number;
  duration: number;
  clipPercent: number;
  onChange: (key: string, value: number) => void;
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <motion.svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.2 }}
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </motion.svg>
  );
}

export function AdvancedSettings({
  strength,
  duration,
  clipPercent,
  onChange,
}: AdvancedSettingsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useI18n();

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800/50">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:text-white cursor-pointer"
        aria-expanded={isOpen}
        aria-controls="advanced-settings-panel"
      >
        <span>{t("advanced.title")}</span>
        <ChevronIcon open={isOpen} />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id="advanced-settings-panel"
            role="region"
            aria-label="Advanced settings"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" as const }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-5 border-t border-slate-700 px-4 py-4">
              <Slider
                label={t("advanced.strength")}
                value={strength}
                min={0}
                max={1}
                step={0.01}
                onChange={(v) => onChange("strength", v)}
              />
              <Slider
                label={t("advanced.duration")}
                value={duration}
                min={1}
                max={60}
                step={1}
                onChange={(v) => onChange("duration", v)}
              />
              <Slider
                label={t("advanced.clipPercent")}
                value={clipPercent}
                min={50}
                max={100}
                step={1}
                onChange={(v) => onChange("clipPercent", v)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

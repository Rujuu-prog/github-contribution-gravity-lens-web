"use client";

import { motion } from "motion/react";
import { THEME_NAMES, type ThemeName } from "@/lib/constants";
import { useI18n } from "@/lib/i18n-context";

interface ThemeSelectorProps {
  value: string;
  onChange: (theme: string) => void;
}

const THEME_SWATCHES: Record<ThemeName, { colors: string[]; accentColor: string }> = {
  github: {
    colors: ["#9be9a8", "#40c463", "#30a14e", "#216e39"],
    accentColor: "#40c463",
  },
  "deep-space": {
    colors: ["#0d1117", "#6e40c9", "#8957e5", "#d2a8ff"],
    accentColor: "#8957e5",
  },
  monochrome: {
    colors: ["#e0e0e0", "#a0a0a0", "#606060", "#303030"],
    accentColor: "#a0a0a0",
  },
  "solar-flare": {
    colors: ["#ff6d00", "#ff9100", "#ffc400", "#ffab00"],
    accentColor: "#ff9100",
  },
  "event-horizon": {
    colors: ["#0d1117", "#da3633", "#f85149", "#ff7b72"],
    accentColor: "#f85149",
  },
  "paper-light": {
    colors: ["#ebedf0", "#9be9a8", "#40c463", "#216e39"],
    accentColor: "#40c463",
  },
};

export function ThemeSelector({ value, onChange }: ThemeSelectorProps) {
  const { t } = useI18n();

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3" role="radiogroup" aria-label="Theme selection">
      {THEME_NAMES.map((theme) => {
        const { colors, accentColor } = THEME_SWATCHES[theme];
        const label = t(`theme.${theme}`);
        const isSelected = value === theme;

        return (
          <motion.button
            key={theme}
            type="button"
            role="radio"
            aria-checked={isSelected}
            onClick={() => onChange(theme)}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className={`relative flex flex-col items-center gap-2.5 rounded-xl border p-4 text-sm transition-colors cursor-pointer ${
              isSelected
                ? "text-white"
                : "border-slate-700 bg-slate-800/50 text-slate-400 hover:border-slate-500 hover:text-slate-200"
            }`}
            style={isSelected ? { borderColor: accentColor, backgroundColor: `${accentColor}1a` } : undefined}
          >
            {isSelected && (
              <motion.div
                layoutId="theme-indicator"
                className="absolute inset-0 rounded-xl border-2"
                style={{ borderColor: accentColor }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}

            <div className="flex gap-1.5">
              {colors.slice(0, 3).map((color, i) => (
                <span
                  key={i}
                  className="block h-4 w-4 rounded-full border border-white/10"
                  style={{ backgroundColor: color }}
                  aria-hidden="true"
                />
              ))}
            </div>

            <span className="relative z-10 text-xs font-medium">{label}</span>
          </motion.button>
        );
      })}
    </div>
  );
}

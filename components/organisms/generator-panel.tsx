"use client";

import { type FormEvent, useState, useCallback } from "react";
import { motion } from "motion/react";
import { Input } from "@/components/atoms/input";
import { Button } from "@/components/atoms/button";
import { ThemeSelector } from "@/components/molecules/theme-selector";
import { AdvancedSettings } from "@/components/molecules/advanced-settings";
import { DEFAULTS, type ThemeName } from "@/lib/constants";
import { isValidUsername } from "@/lib/validation";
import { useI18n } from "@/lib/i18n-context";

interface GenerateOptions {
  username: string;
  theme: ThemeName;
  strength: number;
  duration: number;
  clipPercent: number;
}

interface GeneratorPanelProps {
  onGenerate: (options: GenerateOptions) => void;
  loading: boolean;
  initialUsername?: string;
  initialTheme?: ThemeName;
  initialStrength?: number;
  initialDuration?: number;
  initialClipPercent?: number;
}

export function GeneratorPanel({
  onGenerate,
  loading,
  initialUsername = "",
  initialTheme = DEFAULTS.theme,
  initialStrength = DEFAULTS.strength,
  initialDuration = DEFAULTS.duration,
  initialClipPercent = DEFAULTS.clipPercent,
}: GeneratorPanelProps) {
  const { t } = useI18n();
  const [username, setUsername] = useState(initialUsername);
  const [theme, setTheme] = useState<ThemeName>(initialTheme);
  const [strength, setStrength] = useState(initialStrength);
  const [duration, setDuration] = useState(initialDuration);
  const [clipPercent, setClipPercent] = useState(initialClipPercent);
  const [touched, setTouched] = useState(false);

  const trimmed = username.trim();
  const valid = trimmed.length === 0 || isValidUsername(trimmed);
  const canSubmit = trimmed.length > 0 && valid && !loading;

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      if (!canSubmit) return;
      onGenerate({ username: trimmed, theme, strength, duration, clipPercent });
    },
    [canSubmit, trimmed, theme, strength, duration, clipPercent, onGenerate],
  );

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" as const }}
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 rounded-xl border border-slate-800 bg-slate-950/60 p-6 backdrop-blur-sm"
    >
      <div className="flex flex-col gap-1.5">
        <Input
          label={t("generator.username_label")}
          placeholder={t("generator.username_placeholder")}
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            if (!touched) setTouched(true);
          }}
          onBlur={() => setTouched(true)}
          aria-invalid={touched && !valid ? "true" : undefined}
          aria-describedby={touched && !valid ? "username-error" : undefined}
        />
        {touched && !valid && (
          <motion.p
            id="username-error"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.2 }}
            role="alert"
            className="text-xs text-red-400"
          >
            {t("generator.username_error")}
          </motion.p>
        )}
      </div>

      <ThemeSelector value={theme} onChange={(v) => setTheme(v as ThemeName)} />

      <AdvancedSettings
        strength={strength}
        duration={duration}
        clipPercent={clipPercent}
        onChange={(key, value) => {
          if (key === "strength") setStrength(value);
          else if (key === "duration") setDuration(value);
          else if (key === "clipPercent") setClipPercent(value);
        }}
      />

      <Button type="submit" variant="primary" disabled={!canSubmit}>
        {loading ? t("generator.generating") : t("generator.generate")}
      </Button>
    </motion.form>
  );
}

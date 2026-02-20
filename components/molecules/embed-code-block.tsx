"use client";

import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { CopyButton } from "@/components/atoms/copy-button";
import { useI18n } from "@/lib/i18n-context";

interface EmbedCodeBlockProps {
  username: string;
  theme: string;
  baseUrl?: string;
}

type TabId = "markdown" | "html";

const TABS: { id: TabId; label: string }[] = [
  { id: "markdown", label: "Markdown" },
  { id: "html", label: "HTML" },
];

export function EmbedCodeBlock({
  username,
  theme,
  baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "",
}: EmbedCodeBlockProps) {
  const { t } = useI18n();
  const [activeTab, setActiveTab] = useState<TabId>("markdown");

  const imageUrl = useMemo(() => {
    const params = new URLSearchParams();
    if (theme) params.set("theme", theme);
    const qs = params.toString();
    return `${baseUrl}/api/svg/${username}${qs ? `?${qs}` : ""}`;
  }, [username, theme, baseUrl]);

  const snippets: Record<TabId, string> = useMemo(
    () => ({
      markdown: `![Gravity Lens](${imageUrl})`,
      html: `<img src="${imageUrl}" alt="${username}'s GitHub Contribution Gravity Lens" />`,
    }),
    [imageUrl, username]
  );

  const currentSnippet = snippets[activeTab];

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900/80">
      <div className="flex items-center border-b border-slate-700" role="tablist" aria-label="Embed format">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-4 py-2.5 text-sm font-medium transition-colors cursor-pointer ${
                isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="embed-tab-indicator"
                  className="absolute inset-x-0 bottom-0 h-0.5 bg-purple-500"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              {tab.label}
            </button>
          );
        })}
      </div>

      <div
        id={`tabpanel-${activeTab}`}
        role="tabpanel"
        aria-label={`${activeTab} embed code`}
        className="relative p-4"
      >
        <pre className="overflow-x-auto rounded-lg bg-slate-950 p-3 text-sm text-slate-300">
          <code>{currentSnippet}</code>
        </pre>

        <div className="mt-3 flex justify-end">
          <CopyButton text={currentSnippet} label={t("embed.copy")} />
        </div>
      </div>
    </div>
  );
}

"use client";

import { useCallback } from "react";
import { Button } from "@/components/atoms/button";
import { useI18n } from "@/lib/i18n-context";

interface DownloadButtonProps {
  svgString: string;
  username: string;
}

function DownloadIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

export function DownloadButton({ svgString, username }: DownloadButtonProps) {
  const { t } = useI18n();
  const handleDownload = useCallback(() => {
    const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `${username}-gravity-lens.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  }, [svgString, username]);

  return (
    <Button
      variant="secondary"
      onClick={handleDownload}
      disabled={!svgString}
      className="inline-flex items-center gap-2"
    >
      <DownloadIcon />
      {t("embed.download")}
    </Button>
  );
}

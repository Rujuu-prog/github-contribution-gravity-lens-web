"use client";

import { Suspense, use, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { MainLayout } from "@/components/templates/main-layout";
import { GeneratorPanel } from "@/components/organisms/generator-panel";
import { SvgPreview } from "@/components/organisms/svg-preview";
import { EmbedSection } from "@/components/organisms/embed-section";
import { ErrorDisplay } from "@/components/molecules/error-display";
import { StarPrompt } from "@/components/organisms/star-prompt";
import { useI18n } from "@/lib/i18n-context";
import { useGenerator } from "@/hooks/use-generator";
import { parseQueryParams } from "@/lib/url";
import { DEFAULTS, type ThemeName } from "@/lib/constants";

function PermalinkContent({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = use(params);
  const searchParams = useSearchParams();
  const parsed = parseQueryParams(searchParams);
  const { t } = useI18n();

  const { svgString, loading, error, generate, reset } = useGenerator();
  const [lastParams, setLastParams] = useState<{
    username: string;
    theme: string;
  } | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const handleGenerate = (options: {
    username: string;
    theme: ThemeName;
    strength: number;
    duration: number;
    clipPercent: number;
  }) => {
    setLastParams({ username: options.username, theme: options.theme });
    generate(options);
    setTimeout(() => {
      previewRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);
  };

  return (
    <MainLayout>
      <div className="space-y-8">
        <header>
          <h1 className="text-2xl font-bold text-white">
            {t("permalink.title_prefix")}{" "}
            <span className="text-violet-400">{username}</span>
          </h1>
          <p className="mt-1 text-sm text-zinc-400">
            {t("permalink.subtitle")}
          </p>
        </header>

        <GeneratorPanel
          onGenerate={handleGenerate}
          loading={loading}
          initialUsername={username}
          initialTheme={parsed.theme ?? DEFAULTS.theme}
          initialStrength={parsed.strength ?? DEFAULTS.strength}
          initialDuration={parsed.duration ?? DEFAULTS.duration}
          initialClipPercent={parsed.clipPercent ?? DEFAULTS.clipPercent}
        />

        {error && <ErrorDisplay message={error} onRetry={() => reset()} />}

        <div ref={previewRef}>
          <SvgPreview svgString={svgString} loading={loading} />
        </div>

        {svgString && lastParams && (
          <EmbedSection
            svgString={svgString}
            username={lastParams.username}
            theme={lastParams.theme}
          />
        )}

        {svgString && <StarPrompt visible={!!svgString} />}
      </div>
    </MainLayout>
  );
}

export default function PermalinkPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  return (
    <Suspense>
      <PermalinkContent params={params} />
    </Suspense>
  );
}

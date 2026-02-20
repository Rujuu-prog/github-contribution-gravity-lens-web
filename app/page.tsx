"use client";

import { Suspense, useRef, useState } from "react";
import { motion } from "motion/react";
import { MainLayout } from "@/components/templates/main-layout";
import { Hero } from "@/components/organisms/hero";
import { GeneratorPanel } from "@/components/organisms/generator-panel";
import { SvgPreview } from "@/components/organisms/svg-preview";
import { EmbedSection } from "@/components/organisms/embed-section";
import { CtaSection } from "@/components/organisms/cta-section";
import { StarPrompt } from "@/components/organisms/star-prompt";
import { ErrorDisplay } from "@/components/molecules/error-display";
import { useGenerator } from "@/hooks/use-generator";
import { useI18n } from "@/lib/i18n-context";
import type { ThemeName } from "@/lib/constants";

function HomeContent() {
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
      previewRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

  return (
    <MainLayout>
      <div className="space-y-16">
        <Hero />

        <motion.section
          id="generator"
          className="space-y-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-white">{t("generator.title")}</h2>
          <GeneratorPanel onGenerate={handleGenerate} loading={loading} />

          {error && (
            <ErrorDisplay message={error} onRetry={() => reset()} />
          )}

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

        </motion.section>

        <CtaSection />
      </div>

      {svgString && <StarPrompt visible={!!svgString} />}
    </MainLayout>
  );
}

export default function Home() {
  return (
    <Suspense>
      <HomeContent />
    </Suspense>
  );
}

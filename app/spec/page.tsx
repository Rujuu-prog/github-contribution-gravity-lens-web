"use client";

import { MainLayout } from "@/components/templates/main-layout";
import { THEME_NAMES } from "@/lib/constants";
import { useI18n } from "@/lib/i18n-context";

export default function SpecPage() {
  const { t } = useI18n();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "";

  return (
    <MainLayout>
      <div className="space-y-12">
        <header>
          <h1 className="text-3xl font-bold text-white">{t("spec.title")}</h1>
          <p className="mt-2 text-zinc-400">{t("spec.subtitle")}</p>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            {t("spec.endpoint")}
          </h2>
          <code className="block rounded-lg bg-white/5 p-4 text-sm text-zinc-300">
            GET /api/svg/[username]
          </code>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            {t("spec.params")}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-left text-zinc-400">
                  <th className="pb-2 pr-4">{t("spec.param_name")}</th>
                  <th className="pb-2 pr-4">{t("spec.param_type")}</th>
                  <th className="pb-2 pr-4">{t("spec.param_default")}</th>
                  <th className="pb-2">{t("spec.param_desc")}</th>
                </tr>
              </thead>
              <tbody className="text-zinc-300">
                <tr className="border-b border-white/5">
                  <td className="py-2 pr-4 font-mono text-violet-400">theme</td>
                  <td className="py-2 pr-4">string</td>
                  <td className="py-2 pr-4">deep-space</td>
                  <td className="py-2">{t("spec.theme_desc")}</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 pr-4 font-mono text-violet-400">
                    strength
                  </td>
                  <td className="py-2 pr-4">number</td>
                  <td className="py-2 pr-4">0.35</td>
                  <td className="py-2">{t("spec.strength_desc")}</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 pr-4 font-mono text-violet-400">
                    duration
                  </td>
                  <td className="py-2 pr-4">integer</td>
                  <td className="py-2 pr-4">14</td>
                  <td className="py-2">{t("spec.duration_desc")}</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 pr-4 font-mono text-violet-400">
                    clipPercent
                  </td>
                  <td className="py-2 pr-4">number</td>
                  <td className="py-2 pr-4">95</td>
                  <td className="py-2">{t("spec.clipPercent_desc")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            {t("spec.themes")}
          </h2>
          <div className="flex flex-wrap gap-2">
            {THEME_NAMES.map((name) => (
              <span
                key={name}
                className="rounded-full bg-white/5 px-3 py-1 text-sm text-zinc-300"
              >
                {name}
              </span>
            ))}
            <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-zinc-500">
              dark (alias &rarr; github)
            </span>
            <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-zinc-500">
              light (alias &rarr; paper-light)
            </span>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            {t("spec.response")}
          </h2>
          <div className="space-y-2 text-sm text-zinc-300">
            <p>
              <strong className="text-white">200</strong> &mdash; SVG image
              (Content-Type: image/svg+xml)
            </p>
            <p>
              <strong className="text-white">400</strong> &mdash; Invalid
              username
            </p>
            <p>
              <strong className="text-white">429</strong> &mdash; Rate limit
              exceeded (30 requests/minute)
            </p>
            <p>
              <strong className="text-white">500</strong> &mdash; Server error
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            {t("spec.example")}
          </h2>
          <code className="block rounded-lg bg-white/5 p-4 text-sm text-zinc-300">
            curl {`${baseUrl}/api/svg/octocat?theme=deep-space&strength=0.35`}
          </code>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            {t("spec.caching")}
          </h2>
          <p className="text-sm text-zinc-300">
            {t("spec.caching_desc")
              .replace(
                "{smaxage}",
                "s-maxage=86400",
              )
              .replace(
                "{swr}",
                "stale-while-revalidate=3600",
              )}
          </p>
        </section>
      </div>
    </MainLayout>
  );
}

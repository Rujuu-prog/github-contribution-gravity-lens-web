"use client";

import { MainLayout } from "@/components/templates/main-layout";
import { REPO_URL, NPX_COMMAND } from "@/lib/constants";
import { useI18n } from "@/lib/i18n-context";

export default function DocsPage() {
  const { t } = useI18n();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "";

  return (
    <MainLayout>
      <div className="space-y-12">
        <header>
          <h1 className="text-3xl font-bold text-white">{t("docs.title")}</h1>
          <p className="mt-2 text-zinc-400">{t("docs.subtitle")}</p>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            {t("docs.quickstart")}
          </h2>
          <div className="space-y-3 text-sm text-zinc-300">
            <p>{t("docs.quickstart_p1")}</p>
            <p>{t("docs.quickstart_p2")}</p>
            <code className="block rounded-lg bg-white/5 p-4 text-zinc-300">
              {NPX_COMMAND}
            </code>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            {t("docs.embedding")}
          </h2>
          <div className="space-y-3 text-sm text-zinc-300">
            <p>{t("docs.embedding_desc")}</p>
            <h3 className="text-base font-medium text-white">Markdown</h3>
            <code className="block rounded-lg bg-white/5 p-4 text-zinc-300">
              {`![Gravity Lens](${baseUrl}/api/svg/YOUR_USERNAME?theme=deep-space)`}
            </code>
            <h3 className="text-base font-medium text-white">HTML</h3>
            <code className="block rounded-lg bg-white/5 p-4 text-zinc-300">
              {`<img src="${baseUrl}/api/svg/YOUR_USERNAME?theme=deep-space" alt="Gravity Lens" />`}
            </code>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            {t("docs.actions")}
          </h2>
          <div className="space-y-3 text-sm text-zinc-300">
            <p>{t("docs.actions_desc")}</p>
            <a
              href={`${REPO_URL}/blob/main/docs/github-actions.md`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-violet-400 hover:text-violet-300"
            >
              {t("docs.actions_link")} &rarr;
            </a>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            {t("docs.themes")}
          </h2>
          <div className="space-y-3 text-sm text-zinc-300">
            <p>{t("docs.themes_desc")}</p>
            <ul className="list-inside list-disc space-y-1">
              <li>
                <strong className="text-white">github</strong> &mdash;{" "}
                {t("docs.theme_github")}
              </li>
              <li>
                <strong className="text-white">deep-space</strong> &mdash;{" "}
                {t("docs.theme_deep_space")}
              </li>
              <li>
                <strong className="text-white">monochrome</strong> &mdash;{" "}
                {t("docs.theme_monochrome")}
              </li>
              <li>
                <strong className="text-white">solar-flare</strong> &mdash;{" "}
                {t("docs.theme_solar_flare")}
              </li>
              <li>
                <strong className="text-white">event-horizon</strong> &mdash;{" "}
                {t("docs.theme_event_horizon")}
              </li>
              <li>
                <strong className="text-white">paper-light</strong> &mdash;{" "}
                {t("docs.theme_paper_light")}
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            {t("docs.advanced")}
          </h2>
          <div className="space-y-3 text-sm text-zinc-300">
            <dl className="space-y-4">
              <div>
                <dt className="font-medium text-white">
                  {t("docs.strength_label")}
                </dt>
                <dd className="text-zinc-400">{t("docs.strength_desc")}</dd>
              </div>
              <div>
                <dt className="font-medium text-white">
                  {t("docs.duration_label")}
                </dt>
                <dd className="text-zinc-400">{t("docs.duration_desc")}</dd>
              </div>
              <div>
                <dt className="font-medium text-white">
                  {t("docs.clipPercent_label")}
                </dt>
                <dd className="text-zinc-400">
                  {t("docs.clipPercent_desc")}
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            {t("docs.links")}
          </h2>
          <div className="flex flex-col gap-2 text-sm">
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 hover:text-violet-300"
            >
              {t("docs.repo_link")} &rarr;
            </a>
            <a
              href="https://www.npmjs.com/package/github-contribution-gravity-lens"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 hover:text-violet-300"
            >
              {t("docs.npm_link")} &rarr;
            </a>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

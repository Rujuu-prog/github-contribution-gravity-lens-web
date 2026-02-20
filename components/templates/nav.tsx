"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n-context";

export function Nav() {
  const { locale, setLocale, t } = useI18n();

  const links = [
    { href: "/", label: t("nav.home") },
    { href: "/spec", label: t("nav.spec") },
    { href: "/docs", label: t("nav.docs") },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-white"
        >
          {t("nav.brand")}
        </Link>
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-purple-500 transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
          <a
            href="https://github.com/Rujuu-prog/github-contribution-gravity-lens"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative text-sm text-zinc-400 transition-colors hover:text-white"
          >
            {t("nav.github")}
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-purple-500 transition-all duration-200 group-hover:w-full" />
          </a>
          <button
            type="button"
            onClick={() => setLocale(locale === "en" ? "ja" : "en")}
            className="rounded-md border border-slate-700 px-2 py-1 text-xs text-zinc-400 transition-colors hover:border-slate-500 hover:text-white cursor-pointer"
            aria-label="Switch language"
          >
            {locale === "en" ? "日本語" : "EN"}
          </button>
        </div>
      </div>
    </nav>
  );
}

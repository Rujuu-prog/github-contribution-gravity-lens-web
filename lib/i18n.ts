export type Locale = "en" | "ja";

const translations: Record<Locale, Record<string, string>> = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.spec": "Spec",
    "nav.docs": "Docs",
    "nav.github": "GitHub",
    "nav.brand": "Gravity Lens",

    // Hero
    "hero.title1": "GitHub Contribution",
    "hero.title2": "Gravity Lens",
    "hero.subtitle":
      "Visualize your GitHub contributions with gravitational lensing effects",

    // Generator
    "generator.title": "Generate Your Lens",
    "generator.username_label": "GitHub Username",
    "generator.username_placeholder": "e.g. octocat",
    "generator.username_error":
      "Invalid GitHub username. Use letters, numbers, and hyphens (max 39 characters).",
    "generator.generate": "Generate",
    "generator.generating": "Generating...",
    "generator.empty":
      "Enter a GitHub username and click Generate to preview.",

    // Theme names
    "theme.github": "GitHub",
    "theme.deep-space": "Deep Space",
    "theme.monochrome": "Monochrome",
    "theme.solar-flare": "Solar Flare",
    "theme.event-horizon": "Event Horizon",
    "theme.paper-light": "Paper Light",

    // Advanced settings
    "advanced.title": "Advanced Settings",
    "advanced.strength": "Strength",
    "advanced.duration": "Duration (seconds)",
    "advanced.clipPercent": "Clip Percent",

    // Embed
    "embed.title": "Export",
    "embed.copy": "Copy",
    "embed.copied": "Copied!",
    "embed.download": "Download SVG",

    // CTA
    "cta.title": "Get Started",
    "cta.star": "Star on GitHub",
    "cta.cli": "Try via CLI",
    "cta.cli_copy": "Copy npx command",
    "cta.actions": "GitHub Actions",

    // Star prompt
    "star.title": "Enjoying Gravity Lens?",
    "star.description":
      "If you found this useful, consider giving it a star on GitHub. It helps others discover the project!",
    "star.button": "Star on GitHub",
    "star.dismiss": "Maybe later",

    // Error
    "error.retry": "Retry",

    // Permalink
    "permalink.title_prefix": "Gravity Lens for",
    "permalink.subtitle": "Click Generate to create the visualization.",

    // Spec page
    "spec.title": "API Specification",
    "spec.subtitle": "SVG generation API endpoint reference.",
    "spec.endpoint": "Endpoint",
    "spec.params": "Query Parameters",
    "spec.param_name": "Parameter",
    "spec.param_type": "Type",
    "spec.param_default": "Default",
    "spec.param_desc": "Description",
    "spec.theme_desc": "Color theme for the SVG",
    "spec.strength_desc": "Warp strength (0 - 1)",
    "spec.duration_desc": "Animation duration in seconds (1 - 60)",
    "spec.clipPercent_desc": "Clip percentile (50 - 100)",
    "spec.themes": "Available Themes",
    "spec.response": "Response",
    "spec.example": "Example",
    "spec.caching": "Caching",
    "spec.caching_desc":
      "Responses are cached at the CDN edge with {smaxage} (24h) and {swr} (1h).",

    // Docs page
    "docs.title": "Documentation",
    "docs.subtitle": "How to use GitHub Contribution Gravity Lens.",
    "docs.quickstart": "Quick Start",
    "docs.quickstart_p1":
      "The simplest way to generate a Gravity Lens visualization is to use this web UI. Enter your GitHub username and click Generate.",
    "docs.quickstart_p2": "You can also use the CLI tool directly:",
    "docs.embedding": "Embedding in README",
    "docs.embedding_desc":
      "After generating your SVG, copy the embed code and paste it into your README.md:",
    "docs.actions": "GitHub Actions",
    "docs.actions_desc":
      "Automate SVG generation with GitHub Actions for always up-to-date contribution visualizations.",
    "docs.actions_link": "View GitHub Actions setup guide",
    "docs.themes": "Themes",
    "docs.themes_desc":
      "Six built-in themes are available, each designed for different aesthetics:",
    "docs.theme_github": "Classic GitHub green contribution colors",
    "docs.theme_deep_space": "Purple and blue cosmic theme (default)",
    "docs.theme_monochrome": "Elegant grayscale",
    "docs.theme_solar_flare": "Warm orange and red",
    "docs.theme_event_horizon": "Dark with crimson accents",
    "docs.theme_paper_light": "Light background for light-themed READMEs",
    "docs.advanced": "Advanced Options",
    "docs.strength_label": "Strength (0 - 1)",
    "docs.strength_desc":
      "Controls the intensity of the gravitational warp effect. Higher values create more dramatic distortions around active contribution areas.",
    "docs.duration_label": "Duration (1 - 60 seconds)",
    "docs.duration_desc":
      "Length of the SVG animation cycle. The animation loops continuously.",
    "docs.clipPercent_label": "Clip Percent (50 - 100)",
    "docs.clipPercent_desc":
      "Percentile threshold for anomaly detection. Lower values create more anomaly highlights.",
    "docs.links": "Links",
    "docs.repo_link": "GitHub Repository",
    "docs.npm_link": "npm Package",
  },
  ja: {
    // Nav
    "nav.home": "ホーム",
    "nav.spec": "仕様",
    "nav.docs": "ドキュメント",
    "nav.github": "GitHub",
    "nav.brand": "Gravity Lens",

    // Hero
    "hero.title1": "GitHub Contribution",
    "hero.title2": "Gravity Lens",
    "hero.subtitle":
      "GitHubのコントリビューションを重力レンズ効果で可視化",

    // Generator
    "generator.title": "レンズを生成",
    "generator.username_label": "GitHub ユーザー名",
    "generator.username_placeholder": "例: octocat",
    "generator.username_error":
      "無効なGitHubユーザー名です。英数字とハイフンのみ（最大39文字）。",
    "generator.generate": "生成",
    "generator.generating": "生成中...",
    "generator.empty":
      "GitHubユーザー名を入力して「生成」をクリックしてください。",

    // Theme names
    "theme.github": "GitHub",
    "theme.deep-space": "ディープスペース",
    "theme.monochrome": "モノクロ",
    "theme.solar-flare": "ソーラーフレア",
    "theme.event-horizon": "イベントホライズン",
    "theme.paper-light": "ペーパーライト",

    // Advanced settings
    "advanced.title": "詳細設定",
    "advanced.strength": "強度",
    "advanced.duration": "アニメーション時間（秒）",
    "advanced.clipPercent": "クリップパーセント",

    // Embed
    "embed.title": "エクスポート",
    "embed.copy": "コピー",
    "embed.copied": "コピーしました！",
    "embed.download": "SVGをダウンロード",

    // CTA
    "cta.title": "はじめよう",
    "cta.star": "GitHubでスターする",
    "cta.cli": "CLIで試す",
    "cta.cli_copy": "npxコマンドをコピー",
    "cta.actions": "GitHub Actions",

    // Star prompt
    "star.title": "Gravity Lensは役立ちましたか？",
    "star.description":
      "もしお役に立てたなら、GitHubでスターをお願いします。プロジェクトの発見に役立ちます！",
    "star.button": "GitHubでスターする",
    "star.dismiss": "また今度",

    // Error
    "error.retry": "再試行",

    // Permalink
    "permalink.title_prefix": "Gravity Lens:",
    "permalink.subtitle": "「生成」をクリックしてビジュアライゼーションを作成します。",

    // Spec page
    "spec.title": "API仕様",
    "spec.subtitle": "SVG生成APIエンドポイントのリファレンス。",
    "spec.endpoint": "エンドポイント",
    "spec.params": "クエリパラメータ",
    "spec.param_name": "パラメータ",
    "spec.param_type": "型",
    "spec.param_default": "デフォルト",
    "spec.param_desc": "説明",
    "spec.theme_desc": "SVGのカラーテーマ",
    "spec.strength_desc": "ワープ強度 (0 - 1)",
    "spec.duration_desc": "アニメーション時間（秒） (1 - 60)",
    "spec.clipPercent_desc": "クリップパーセンタイル (50 - 100)",
    "spec.themes": "利用可能なテーマ",
    "spec.response": "レスポンス",
    "spec.example": "使用例",
    "spec.caching": "キャッシュ",
    "spec.caching_desc":
      "レスポンスはCDNエッジで {smaxage}（24時間）と {swr}（1時間）でキャッシュされます。",

    // Docs page
    "docs.title": "ドキュメント",
    "docs.subtitle": "GitHub Contribution Gravity Lensの使い方。",
    "docs.quickstart": "クイックスタート",
    "docs.quickstart_p1":
      "Gravity Lensビジュアライゼーションを生成する最も簡単な方法は、このWebUIを使用することです。GitHubユーザー名を入力して「生成」をクリックしてください。",
    "docs.quickstart_p2": "CLIツールを直接使用することもできます：",
    "docs.embedding": "READMEへの埋め込み",
    "docs.embedding_desc":
      "SVGを生成した後、埋め込みコードをコピーしてREADME.mdに貼り付けてください：",
    "docs.actions": "GitHub Actions",
    "docs.actions_desc":
      "GitHub Actionsを使用してSVG生成を自動化し、常に最新のコントリビューションビジュアライゼーションを維持できます。",
    "docs.actions_link": "GitHub Actionsセットアップガイドを見る",
    "docs.themes": "テーマ",
    "docs.themes_desc":
      "6つのビルトインテーマが利用可能で、それぞれ異なる美学でデザインされています：",
    "docs.theme_github": "クラシックなGitHubグリーンのコントリビューションカラー",
    "docs.theme_deep_space": "パープルとブルーのコスミックテーマ（デフォルト）",
    "docs.theme_monochrome": "エレガントなグレースケール",
    "docs.theme_solar_flare": "暖かみのあるオレンジとレッド",
    "docs.theme_event_horizon": "ダークとクリムゾンのアクセント",
    "docs.theme_paper_light": "ライトテーマのREADME用の明るい背景",
    "docs.advanced": "詳細オプション",
    "docs.strength_label": "強度 (0 - 1)",
    "docs.strength_desc":
      "重力ワープ効果の強さを制御します。高い値ほど、アクティブなコントリビューション領域周辺の歪みが大きくなります。",
    "docs.duration_label": "アニメーション時間 (1 - 60秒)",
    "docs.duration_desc":
      "SVGアニメーションサイクルの長さ。アニメーションは連続的にループします。",
    "docs.clipPercent_label": "クリップパーセント (50 - 100)",
    "docs.clipPercent_desc":
      "異常検出のパーセンタイル閾値。低い値ほど、より多くの異常ハイライトが作成されます。",
    "docs.links": "リンク",
    "docs.repo_link": "GitHubリポジトリ",
    "docs.npm_link": "npmパッケージ",
  },
};

export function detectLocale(): Locale {
  if (typeof navigator === "undefined") return "en";
  const lang = navigator.language || "";
  if (lang.startsWith("ja")) return "ja";
  return "en";
}

export function getTranslation(
  locale: Locale,
  key: string,
): string {
  return translations[locale]?.[key] ?? translations.en[key] ?? key;
}

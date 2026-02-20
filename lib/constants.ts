export const THEME_NAMES = [
  "github",
  "deep-space",
  "monochrome",
  "solar-flare",
  "event-horizon",
  "paper-light",
] as const;

export type ThemeName = (typeof THEME_NAMES)[number];

export const THEME_ALIASES: Record<string, ThemeName> = {
  dark: "github",
  light: "paper-light",
};

export const DEFAULTS = {
  theme: "deep-space" as ThemeName,
  strength: 0.35,
  duration: 14,
  clipPercent: 95,
} as const;

export const REPO_URL =
  "https://github.com/Rujuu-prog/github-contribution-gravity-lens";
export const NPX_COMMAND =
  "npx github-contribution-gravity-lens --user <username> --token <GitHub Personal Access Token> --theme <theme-name>";
export const ACTIONS_URL =
  `${REPO_URL}/blob/main/docs/getting-started.md`;
export const GITHUB_ACTIONS_DOC_URL =
  `${REPO_URL}/blob/main/docs/getting-started.md`;

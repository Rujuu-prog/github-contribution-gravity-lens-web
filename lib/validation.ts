import { THEME_NAMES, type ThemeName, THEME_ALIASES } from "./constants";

const USERNAME_RE = /^[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,38}$/;

export function isValidUsername(value: string): boolean {
  return USERNAME_RE.test(value);
}

export function isValidTheme(value: string): value is ThemeName {
  return (
    (THEME_NAMES as readonly string[]).includes(value) ||
    value in THEME_ALIASES
  );
}

export function resolveTheme(value: string): ThemeName | null {
  if ((THEME_NAMES as readonly string[]).includes(value)) {
    return value as ThemeName;
  }
  return THEME_ALIASES[value] ?? null;
}

export function isValidStrength(value: number): boolean {
  return Number.isFinite(value) && value >= 0 && value <= 1;
}

export function isValidDuration(value: number): boolean {
  return Number.isInteger(value) && value >= 1 && value <= 60;
}

export function isValidClipPercent(value: number): boolean {
  return Number.isFinite(value) && value >= 50 && value <= 100;
}

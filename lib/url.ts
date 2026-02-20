import { DEFAULTS, type ThemeName } from "./constants";
import { resolveTheme } from "./validation";

export interface GeneratorParams {
  username: string;
  theme: ThemeName;
  strength: number;
  duration: number;
  clipPercent: number;
}

export function buildPermalink(params: GeneratorParams): string {
  const searchParams = new URLSearchParams();

  if (params.theme !== DEFAULTS.theme) {
    searchParams.set("theme", params.theme);
  }
  if (params.strength !== DEFAULTS.strength) {
    searchParams.set("strength", String(params.strength));
  }
  if (params.duration !== DEFAULTS.duration) {
    searchParams.set("duration", String(params.duration));
  }
  if (params.clipPercent !== DEFAULTS.clipPercent) {
    searchParams.set("clipPercent", String(params.clipPercent));
  }

  const qs = searchParams.toString();
  return `/u/${params.username}${qs ? `?${qs}` : ""}`;
}

export function parseQueryParams(
  searchParams: URLSearchParams
): Partial<Omit<GeneratorParams, "username">> {
  const result: Partial<Omit<GeneratorParams, "username">> = {};

  const theme = searchParams.get("theme");
  if (theme) {
    const resolved = resolveTheme(theme);
    if (resolved) result.theme = resolved;
  }

  const strength = searchParams.get("strength");
  if (strength) {
    const n = parseFloat(strength);
    if (Number.isFinite(n) && n >= 0 && n <= 1) result.strength = n;
  }

  const duration = searchParams.get("duration");
  if (duration) {
    const n = parseInt(duration, 10);
    if (Number.isInteger(n) && n >= 1 && n <= 60) result.duration = n;
  }

  const clipPercent = searchParams.get("clipPercent");
  if (clipPercent) {
    const n = parseFloat(clipPercent);
    if (Number.isFinite(n) && n >= 50 && n <= 100) result.clipPercent = n;
  }

  return result;
}

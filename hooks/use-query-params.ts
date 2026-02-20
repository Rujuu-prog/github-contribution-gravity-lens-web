"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { parseQueryParams } from "@/lib/url";
import { DEFAULTS } from "@/lib/constants";
import type { GeneratorParams } from "@/lib/url";

export function useQueryParams(): Omit<GeneratorParams, "username"> {
  const searchParams = useSearchParams();

  return useMemo(() => {
    const parsed = parseQueryParams(searchParams);
    return {
      theme: parsed.theme ?? DEFAULTS.theme,
      strength: parsed.strength ?? DEFAULTS.strength,
      duration: parsed.duration ?? DEFAULTS.duration,
      clipPercent: parsed.clipPercent ?? DEFAULTS.clipPercent,
    };
  }, [searchParams]);
}

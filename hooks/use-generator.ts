"use client";

import { useState, useCallback } from "react";
import type { ThemeName } from "@/lib/constants";

interface GeneratorState {
  svgString: string | null;
  loading: boolean;
  error: string | null;
}

interface GenerateOptions {
  username: string;
  theme: ThemeName;
  strength: number;
  duration: number;
  clipPercent: number;
}

export function useGenerator() {
  const [state, setState] = useState<GeneratorState>({
    svgString: null,
    loading: false,
    error: null,
  });

  const generate = useCallback(async (options: GenerateOptions) => {
    setState({ svgString: null, loading: true, error: null });

    const params = new URLSearchParams({
      theme: options.theme,
      strength: String(options.strength),
      duration: String(options.duration),
      clipPercent: String(options.clipPercent),
    });

    try {
      const res = await fetch(
        `/api/svg/${encodeURIComponent(options.username)}?${params}`
      );

      if (!res.ok) {
        const data = await res.json().catch(() => ({ error: "Request failed" }));
        throw new Error(data.error || `HTTP ${res.status}`);
      }

      const svgString = await res.text();
      setState({ svgString, loading: false, error: null });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      setState({ svgString: null, loading: false, error: message });
    }
  }, []);

  const reset = useCallback(() => {
    setState({ svgString: null, loading: false, error: null });
  }, []);

  return { ...state, generate, reset };
}

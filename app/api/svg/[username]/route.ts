import { fetchContributions, renderSvg } from "github-contribution-gravity-lens";
import { isValidUsername, resolveTheme } from "@/lib/validation";
import { checkRateLimit } from "@/lib/rate-limit";
import { DEFAULTS } from "@/lib/constants";

function jsonResponse(body: object, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ username: string }> }
) {
  const { username } = await params;

  if (!isValidUsername(username)) {
    return jsonResponse({ error: "Invalid username" }, 400);
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown";
  const { allowed } = checkRateLimit(ip);
  if (!allowed) {
    return jsonResponse(
      { error: "Rate limit exceeded. Try again later." },
      429
    );
  }

  const url = new URL(request.url);
  const themeParam = url.searchParams.get("theme");
  const theme = (themeParam && resolveTheme(themeParam)) || DEFAULTS.theme;

  const strengthParam = url.searchParams.get("strength");
  const strength = strengthParam
    ? parseFloat(strengthParam)
    : DEFAULTS.strength;

  const durationParam = url.searchParams.get("duration");
  const duration = durationParam
    ? parseInt(durationParam, 10)
    : DEFAULTS.duration;

  const clipPercentParam = url.searchParams.get("clipPercent");
  const clipPercent = clipPercentParam
    ? parseFloat(clipPercentParam)
    : DEFAULTS.clipPercent;

  try {
    const token = process.env.GITHUB_TOKEN ?? "";
    const days = await fetchContributions(username, token);
    const svg = renderSvg(days, { theme, strength, duration, clipPercent });

    return new Response(svg, {
      status: 200,
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control":
          "public, s-maxage=86400, stale-while-revalidate=3600",
      },
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Internal server error";
    return jsonResponse({ error: message }, 500);
  }
}

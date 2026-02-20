import { buildPermalink, parseQueryParams } from "@/lib/url";
import { DEFAULTS } from "@/lib/constants";

describe("buildPermalink", () => {
  it("builds minimal URL with only username when all defaults", () => {
    const url = buildPermalink({
      username: "octocat",
      theme: DEFAULTS.theme,
      strength: DEFAULTS.strength,
      duration: DEFAULTS.duration,
      clipPercent: DEFAULTS.clipPercent,
    });
    expect(url).toBe("/u/octocat");
  });

  it("includes non-default theme", () => {
    const url = buildPermalink({
      username: "octocat",
      theme: "github",
      strength: DEFAULTS.strength,
      duration: DEFAULTS.duration,
      clipPercent: DEFAULTS.clipPercent,
    });
    expect(url).toBe("/u/octocat?theme=github");
  });

  it("includes all non-default params", () => {
    const url = buildPermalink({
      username: "octocat",
      theme: "solar-flare",
      strength: 0.8,
      duration: 30,
      clipPercent: 80,
    });
    expect(url).toContain("/u/octocat?");
    expect(url).toContain("theme=solar-flare");
    expect(url).toContain("strength=0.8");
    expect(url).toContain("duration=30");
    expect(url).toContain("clipPercent=80");
  });
});

describe("parseQueryParams", () => {
  it("returns empty object for no params", () => {
    const result = parseQueryParams(new URLSearchParams());
    expect(result).toEqual({});
  });

  it("parses valid theme", () => {
    const result = parseQueryParams(new URLSearchParams("theme=github"));
    expect(result.theme).toBe("github");
  });

  it("resolves theme aliases", () => {
    const result = parseQueryParams(new URLSearchParams("theme=dark"));
    expect(result.theme).toBe("github");
  });

  it("ignores invalid theme", () => {
    const result = parseQueryParams(new URLSearchParams("theme=invalid"));
    expect(result.theme).toBeUndefined();
  });

  it("parses valid strength", () => {
    const result = parseQueryParams(new URLSearchParams("strength=0.7"));
    expect(result.strength).toBe(0.7);
  });

  it("ignores out-of-range strength", () => {
    const result = parseQueryParams(new URLSearchParams("strength=2"));
    expect(result.strength).toBeUndefined();
  });

  it("parses valid duration", () => {
    const result = parseQueryParams(new URLSearchParams("duration=30"));
    expect(result.duration).toBe(30);
  });

  it("parses valid clipPercent", () => {
    const result = parseQueryParams(new URLSearchParams("clipPercent=80"));
    expect(result.clipPercent).toBe(80);
  });

  it("parses all params together", () => {
    const result = parseQueryParams(
      new URLSearchParams("theme=solar-flare&strength=0.8&duration=30&clipPercent=80")
    );
    expect(result).toEqual({
      theme: "solar-flare",
      strength: 0.8,
      duration: 30,
      clipPercent: 80,
    });
  });
});

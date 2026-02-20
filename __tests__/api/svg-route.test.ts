/**
 * @jest-environment node
 */

import { GET } from "@/app/api/svg/[username]/route";
import { resetRateLimit } from "@/lib/rate-limit";

// Mock the gravity-lens package
jest.mock("github-contribution-gravity-lens", () => ({
  fetchContributions: jest.fn().mockResolvedValue([
    { date: "2024-01-01", count: 5, level: 2 },
    { date: "2024-01-02", count: 0, level: 0 },
  ]),
  renderSvg: jest.fn().mockReturnValue("<svg>mock</svg>"),
}));

function createRequest(url: string): Request {
  return new Request(`http://localhost:3000${url}`, {
    headers: new Headers({ "x-forwarded-for": "127.0.0.1" }),
  });
}

describe("GET /api/svg/[username]", () => {
  beforeEach(() => {
    resetRateLimit();
    jest.clearAllMocks();
  });

  it("returns SVG for valid username", async () => {
    const req = createRequest("/api/svg/octocat");
    const res = await GET(req, { params: Promise.resolve({ username: "octocat" }) });
    expect(res.status).toBe(200);
    expect(res.headers.get("content-type")).toBe("image/svg+xml");
    const body = await res.text();
    expect(body).toContain("<svg");
  });

  it("returns 400 for invalid username", async () => {
    const req = createRequest("/api/svg/-invalid");
    const res = await GET(req, { params: Promise.resolve({ username: "-invalid" }) });
    expect(res.status).toBe(400);
  });

  it("accepts theme query param", async () => {
    const { renderSvg } = require("github-contribution-gravity-lens");
    const req = createRequest("/api/svg/octocat?theme=solar-flare");
    await GET(req, { params: Promise.resolve({ username: "octocat" }) });
    expect(renderSvg).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({ theme: "solar-flare" })
    );
  });

  it("uses default theme when not specified", async () => {
    const { renderSvg } = require("github-contribution-gravity-lens");
    const req = createRequest("/api/svg/octocat");
    await GET(req, { params: Promise.resolve({ username: "octocat" }) });
    expect(renderSvg).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({ theme: "deep-space" })
    );
  });

  it("sets cache headers", async () => {
    const req = createRequest("/api/svg/octocat");
    const res = await GET(req, { params: Promise.resolve({ username: "octocat" }) });
    const cacheControl = res.headers.get("cache-control");
    expect(cacheControl).toContain("s-maxage=86400");
    expect(cacheControl).toContain("stale-while-revalidate=3600");
  });

  it("returns 429 when rate limited", async () => {
    for (let i = 0; i < 30; i++) {
      await GET(
        createRequest("/api/svg/octocat"),
        { params: Promise.resolve({ username: "octocat" }) }
      );
    }
    const res = await GET(
      createRequest("/api/svg/octocat"),
      { params: Promise.resolve({ username: "octocat" }) }
    );
    expect(res.status).toBe(429);
  });

  it("returns 500 when fetchContributions fails", async () => {
    const { fetchContributions } = require("github-contribution-gravity-lens");
    fetchContributions.mockRejectedValueOnce(new Error("GitHub API error"));
    const req = createRequest("/api/svg/octocat");
    const res = await GET(req, { params: Promise.resolve({ username: "octocat" }) });
    expect(res.status).toBe(500);
  });
});

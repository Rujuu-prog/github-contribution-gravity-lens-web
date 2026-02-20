import { checkRateLimit, resetRateLimit } from "@/lib/rate-limit";

describe("checkRateLimit", () => {
  beforeEach(() => {
    resetRateLimit();
  });

  it("allows first request", () => {
    const result = checkRateLimit("127.0.0.1");
    expect(result.allowed).toBe(true);
    expect(result.remaining).toBe(29);
  });

  it("tracks remaining count", () => {
    for (let i = 0; i < 5; i++) {
      checkRateLimit("127.0.0.1");
    }
    const result = checkRateLimit("127.0.0.1");
    expect(result.allowed).toBe(true);
    expect(result.remaining).toBe(24);
  });

  it("blocks after 30 requests", () => {
    for (let i = 0; i < 30; i++) {
      checkRateLimit("127.0.0.1");
    }
    const result = checkRateLimit("127.0.0.1");
    expect(result.allowed).toBe(false);
    expect(result.remaining).toBe(0);
  });

  it("tracks different keys independently", () => {
    for (let i = 0; i < 30; i++) {
      checkRateLimit("127.0.0.1");
    }
    const result = checkRateLimit("192.168.1.1");
    expect(result.allowed).toBe(true);
  });

  it("resets with resetRateLimit", () => {
    for (let i = 0; i < 30; i++) {
      checkRateLimit("127.0.0.1");
    }
    resetRateLimit();
    const result = checkRateLimit("127.0.0.1");
    expect(result.allowed).toBe(true);
  });
});

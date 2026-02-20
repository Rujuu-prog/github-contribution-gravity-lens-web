import {
  isValidUsername,
  isValidTheme,
  resolveTheme,
  isValidStrength,
  isValidDuration,
  isValidClipPercent,
} from "@/lib/validation";

describe("isValidUsername", () => {
  it("accepts valid usernames", () => {
    expect(isValidUsername("octocat")).toBe(true);
    expect(isValidUsername("a")).toBe(true);
    expect(isValidUsername("user-name")).toBe(true);
    expect(isValidUsername("user123")).toBe(true);
    expect(isValidUsername("A1b2C3")).toBe(true);
  });

  it("rejects empty string", () => {
    expect(isValidUsername("")).toBe(false);
  });

  it("rejects usernames starting with hyphen", () => {
    expect(isValidUsername("-user")).toBe(false);
  });

  it("rejects consecutive hyphens", () => {
    expect(isValidUsername("user--name")).toBe(false);
  });

  it("rejects usernames ending with hyphen", () => {
    expect(isValidUsername("user-")).toBe(false);
  });

  it("rejects usernames longer than 39 chars", () => {
    expect(isValidUsername("a".repeat(40))).toBe(false);
  });

  it("accepts 39 char username", () => {
    expect(isValidUsername("a".repeat(39))).toBe(true);
  });

  it("rejects special characters", () => {
    expect(isValidUsername("user_name")).toBe(false);
    expect(isValidUsername("user.name")).toBe(false);
    expect(isValidUsername("user@name")).toBe(false);
  });
});

describe("isValidTheme", () => {
  it("accepts valid theme names", () => {
    expect(isValidTheme("github")).toBe(true);
    expect(isValidTheme("deep-space")).toBe(true);
    expect(isValidTheme("paper-light")).toBe(true);
  });

  it("accepts theme aliases", () => {
    expect(isValidTheme("dark")).toBe(true);
    expect(isValidTheme("light")).toBe(true);
  });

  it("rejects invalid themes", () => {
    expect(isValidTheme("invalid")).toBe(false);
    expect(isValidTheme("")).toBe(false);
  });
});

describe("resolveTheme", () => {
  it("returns theme name directly for valid themes", () => {
    expect(resolveTheme("github")).toBe("github");
    expect(resolveTheme("deep-space")).toBe("deep-space");
  });

  it("resolves aliases", () => {
    expect(resolveTheme("dark")).toBe("github");
    expect(resolveTheme("light")).toBe("paper-light");
  });

  it("returns null for invalid themes", () => {
    expect(resolveTheme("invalid")).toBeNull();
  });
});

describe("isValidStrength", () => {
  it("accepts values between 0 and 1", () => {
    expect(isValidStrength(0)).toBe(true);
    expect(isValidStrength(0.5)).toBe(true);
    expect(isValidStrength(1)).toBe(true);
  });

  it("rejects out of range", () => {
    expect(isValidStrength(-0.1)).toBe(false);
    expect(isValidStrength(1.1)).toBe(false);
  });

  it("rejects NaN and Infinity", () => {
    expect(isValidStrength(NaN)).toBe(false);
    expect(isValidStrength(Infinity)).toBe(false);
  });
});

describe("isValidDuration", () => {
  it("accepts integers 1-60", () => {
    expect(isValidDuration(1)).toBe(true);
    expect(isValidDuration(14)).toBe(true);
    expect(isValidDuration(60)).toBe(true);
  });

  it("rejects non-integers", () => {
    expect(isValidDuration(1.5)).toBe(false);
  });

  it("rejects out of range", () => {
    expect(isValidDuration(0)).toBe(false);
    expect(isValidDuration(61)).toBe(false);
  });
});

describe("isValidClipPercent", () => {
  it("accepts 50-100", () => {
    expect(isValidClipPercent(50)).toBe(true);
    expect(isValidClipPercent(95)).toBe(true);
    expect(isValidClipPercent(100)).toBe(true);
  });

  it("rejects out of range", () => {
    expect(isValidClipPercent(49)).toBe(false);
    expect(isValidClipPercent(101)).toBe(false);
  });
});

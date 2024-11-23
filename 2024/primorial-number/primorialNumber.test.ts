import { expect, test, describe } from "bun:test";
import { numPrimorial } from "./primorialNumber";

describe("Primorial Number Tests", () => {
  test("should return 30 for n = 3", () => {
    expect(numPrimorial(3)).toBe(30);
  });

  test("should return 2310 for n = 5", () => {
    expect(numPrimorial(5)).toBe(2310);
  });

  test("should return 30030 for n = 6", () => {
    expect(numPrimorial(6)).toBe(30030);
  });

  test("should return 2 for n = 1", () => {
    expect(numPrimorial(1)).toBe(2);
  });

  test("should return 6 for n = 2", () => {
    expect(numPrimorial(2)).toBe(6);
  });
});

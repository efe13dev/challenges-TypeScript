import { describe, expect, test } from "bun:test";
import { digPow } from "./playingDigits";

describe("Playing with Digits", () => {
  test("should return 1 when n=89 and p=1", () => {
    expect(digPow(89, 1)).toBe(1);
  });

  test("should return -1 when n=92 and p=1", () => {
    expect(digPow(92, 1)).toBe(-1);
  });

  test("should return 2 when n=695 and p=2", () => {
    expect(digPow(695, 2)).toBe(2);
  });

  test("should return 51 when n=46288 and p=3", () => {
    expect(digPow(46288, 3)).toBe(51);
  });

  test("should return -1 when n=100 and p=2", () => {
    expect(digPow(100, 2)).toBe(-1);
  });
});

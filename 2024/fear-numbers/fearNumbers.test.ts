import { expect, test, describe } from "bun:test";
import { fearNumber } from "./fearNumbers";

describe("fearNumber", () => {
  test("should fear number 12 on Monday", () => {
    expect(fearNumber("Monday", 12)).toBe(true);
    expect(fearNumber("Monday", 13)).toBe(false);
  });

  test("should fear numbers greater than 95 on Tuesday", () => {
    expect(fearNumber("Tuesday", 96)).toBe(true);
    expect(fearNumber("Tuesday", 95)).toBe(false);
  });

  test("should fear even numbers on Friday", () => {
    expect(fearNumber("Friday", 2)).toBe(true);
    expect(fearNumber("Friday", 100)).toBe(true);
    expect(fearNumber("Friday", 3)).toBe(false);
  });

  test("should fear both 666 and -666 on Sunday", () => {
    expect(fearNumber("Sunday", 666)).toBe(true);
    expect(fearNumber("Sunday", -666)).toBe(true);
    expect(fearNumber("Sunday", 66)).toBe(false);
  });

  test("should be case insensitive for day names", () => {
    expect(fearNumber("MONDAY", 12)).toBe(true);
    expect(fearNumber("friday", 10)).toBe(true);
    expect(fearNumber("SuNdAy", 666)).toBe(true);
  });
});

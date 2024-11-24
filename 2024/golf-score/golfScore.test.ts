import { expect, test, describe } from "bun:test";
import { calculateGolfScore } from "./golfScore";

describe("Golf Score Calculator", () => {
  test("should calculate correct score when over par", () => {
    const parList = "444454444344544443";
    const scoreList = "555555555455555554";
    expect(calculateGolfScore(parList, scoreList)).toBe(16); // All holes one over par
  });

  test("should calculate correct score when under par", () => {
    const parList = "444454444344544443";
    const scoreList = "333343333233433332";
    expect(calculateGolfScore(parList, scoreList)).toBe(-18); // All holes one under par
  });

  test("should calculate correct score when playing exactly par", () => {
    const parList = "444454444344544443";
    const scoreList = "444454444344544443";
    expect(calculateGolfScore(parList, scoreList)).toBe(0); // Playing exactly to par
  });

  test("should calculate mixed scores correctly", () => {
    const parList = "444454444344544443";
    const scoreList = "353445334534534345";
    expect(calculateGolfScore(parList, scoreList)).toBe(-2); // Mix of over and under par
  });

  test("should throw error for invalid length", () => {
    const parList = "4444";
    const scoreList = "5555";
    expect(() => calculateGolfScore(parList, scoreList)).toThrow(
      "Both input strings must be exactly 18 characters long"
    );
  });

  test("should throw error for invalid numbers", () => {
    const parList = "444454444344544443";
    const scoreList = "55555555A455555554"; // Contains 'A'
    expect(() => calculateGolfScore(parList, scoreList)).toThrow(
      "All values must be numbers between 1 and 9"
    );
  });
});

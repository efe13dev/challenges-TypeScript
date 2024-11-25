import { expect, test, describe } from 'bun:test';
import { consonantValue } from './consonantValue';

describe('Consonant Value', () => {
  test("should return 26 for 'zodiacs'", () => {
    expect(consonantValue('zodiacs')).toBe(26);
  });

  test("should return 57 for 'strength'", () => {
    expect(consonantValue('strength')).toBe(57);
  });

  test("should return 61 for 'typescript'", () => {
    // 'typescript' -> ['t', 'p', 'scr', 'pt']
    // max value is 'scr' = 19 + 3 + 18 = 40
    expect(consonantValue('typescript')).toBe(61);
  });

  test("should return 0 for vowels only 'aeiou'", () => {
    expect(consonantValue('aeiou')).toBe(0);
  });

  test("should return 38 for 'javascript'", () => {
    // 'javascript' -> ['j', 'v', 'scr', 'pt']
    // max value is 'scr' = 19 + 3 + 18 = 40
    expect(consonantValue('javascript')).toBe(40);
  });
});

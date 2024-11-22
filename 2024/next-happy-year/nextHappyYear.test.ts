import { describe, expect, it } from 'bun:test';
import { nextHappyYear } from './nextHappyYear';

describe('nextHappyYear', () => {
  it('should find next year with distinct digits', () => {
    expect(nextHappyYear(1001)).toBe(1023);
  });

  it('should find next year when current year has repeating digits', () => {
    expect(nextHappyYear(2001)).toBe(2013);
  });

  it('should find next year when all digits are different', () => {
    expect(nextHappyYear(2334)).toBe(2340);
  });

  it('should handle years ending in 9', () => {
    expect(nextHappyYear(1999)).toBe(2013);
  });
});

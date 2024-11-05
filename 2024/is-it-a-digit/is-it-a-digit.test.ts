import { describe, expect, it } from 'bun:test';
import { isDigit } from './is-it-a-digit';

describe('isDigit', () => {
  it('should return true for a single digit', () => {
    expect(isDigit('5')).toBe(true);
  });

  it('should return false for a non-digit', () => {
    expect(isDigit('a')).toBe(false);
  });
});

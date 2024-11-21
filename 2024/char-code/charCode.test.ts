import { describe, expect, it } from 'bun:test';
import { charCode } from './charCode';

describe('2024/char-code/charCode', () => {
  it('should return 0 for empty string', () => {
    expect(charCode('')).toBe(0);
  });

  it('should return 0 for string with only 1s', () => {
    expect(charCode('111')).toBe(0);
  });

  it('should return 30 for this case', () => {
    expect(charCode('aaaaaddddr')).toBe(30);
  });

  it('should return 0 for string with only 1s and 7s', () => {
    expect(charCode('171717')).toBe(0);
  });

  it('should return 30 for this case', () => {
    expect(charCode('aaaaaddddr')).toBe(30);
  });
});

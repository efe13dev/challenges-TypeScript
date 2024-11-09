import { describe, expect, it } from 'bun:test';
import { sumStrings } from './sum-string';

describe('sumStrings', () => {
  it('should be return a string', () => {
    expect(sumStrings('4', '5')).toBeTypeOf('string');
  });

  it('should be return "0" if both inputs are empty', () => {
    expect(sumStrings('', '')).toBe('0');
  });

  it('should return the sum of two numbers', () => {
    expect(sumStrings('34', '5')).toBe('39');
  });
});

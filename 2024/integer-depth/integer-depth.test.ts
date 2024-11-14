import { describe, expect, it } from 'bun:test';
import { computeDepth } from './integer-depth';

describe('computeDepth', () => {
  it('should return a number', () => {
    expect(computeDepth(42)).toBeTypeOf('number');
  });
  it('should return 0 for 0', () => {
    expect(computeDepth(0)).toBe(0);
  });
  it('should return the depth of the integer', () => {
    expect(computeDepth(42)).toBe(9);
  });
});

import { describe, expect, it } from 'bun:test';
import { tankvol } from './tankTruk';

describe('tankvol', () => {
  it('should return a number', () => {
    expect(tankvol(40, 120, 3500)).toBeTypeOf('number');
  });
  it('should return 1021 for h=40, d=120, vt=3500', () => {
    expect(tankvol(40, 120, 3500)).toBe(1021);
  });
});

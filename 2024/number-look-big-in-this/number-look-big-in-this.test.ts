import { describe, it, expect } from 'bun:test';
import { isNarcissisticValue } from './number-look-big-in-this';

describe('isNarcissisticValue', () => {
  it('should return true for 153', () => {
    expect(isNarcissisticValue(153)).toBe(true);
  });
  it('should return false for 1652', () => {
    expect(isNarcissisticValue(1652)).toBe(false);
  });
});

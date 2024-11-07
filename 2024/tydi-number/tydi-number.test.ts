import { describe, it, expect } from 'bun:test';
import { isTidyNumber } from './tydi-number';

describe('isTidyNumber', () => {
  it('should return true for tidy numbers', () => {
    expect(isTidyNumber(123)).toBe(true);
  });
  it('should return false for non-tidy numbers', () => {
    expect(isTidyNumber(4685)).toBe(false);
  });
});

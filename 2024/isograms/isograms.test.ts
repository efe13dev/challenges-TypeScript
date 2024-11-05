import { describe, it, expect } from 'bun:test';
import { isIsogram } from './isograms';

describe('isIsogram', () => {
  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });
  it('should return true for a string with no repeating letters', () => {
    expect(isIsogram('Dermatoglyphics')).toBe(true);
  });
  it('should return false for a string with repeating letters', () => {
    expect(isIsogram('aba')).toBe(false);
  });
});

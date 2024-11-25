import { describe, it, expect } from 'bun:test';
import { petYears } from './petYears';

describe('petYears', () => {
  it('should return the correct ages for 1 human year', () => {
    expect(petYears(1)).toEqual([1, 15, 15]);
  });

  it('should return the correct ages for 2 human years', () => {
    expect(petYears(2)).toEqual([2, 24, 24]);
  });

  it('should return the correct ages for 5 human years', () => {
    expect(petYears(5)).toEqual([5, 36, 39]);
  });

  it('should return the correct ages for 10 human years', () => {
    expect(petYears(10)).toEqual([10, 56, 64]);
  });
});

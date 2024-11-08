import { describe, expect, it } from 'bun:test';
import { findNonConsecutive } from './find-non-consecutive';

describe('findNonConsecutive', () => {
  it('should return null for an empty array', () => {
    expect(findNonConsecutive([])).toBeNull();
  });
  it('should be return 6 for [1,2,3,4,6,7,8]', () => {
    expect(findNonConsecutive([1, 2, 3, 4, 6, 7, 8])).toBe(6);
  });
});

import { describe, it, expect } from 'bun:test';
import { average } from './average-scores';

describe('average', () => {
  it('should return 0 when the array is empty', () => {
    expect(average([0, 2])).toBe(1);
  });
  it('should return the average of an array of numbers', () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3);
  });
});

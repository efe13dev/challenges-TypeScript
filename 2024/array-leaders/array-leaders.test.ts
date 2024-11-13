import { describe, it, expect } from 'bun:test';
import { arrayLeaders } from './array-leaders';

describe('arrayLeaders', () => {
  it('should return an array', () => {
    expect(arrayLeaders([1, 2, 3, 4, 0])).toBeInstanceOf(Array);
  });
  it('should return the correct leaders', () => {
    expect(arrayLeaders([1, 2, 3, 4, 0])).toEqual([4]);
  });
});

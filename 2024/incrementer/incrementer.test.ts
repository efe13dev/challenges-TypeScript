import { describe, it, expect } from 'bun:test';

import { incrementer } from './incrementer';

describe('incrementer', () => {
  it('should return an array', () => {
    expect(incrementer([1, 2, 3, 4, 5])).toBeInstanceOf(Array);
  });
  it('should return the incremented array', () => {
    expect(incrementer([1, 2, 3, 4, 5])).toEqual([2, 4, 6, 8, 0]);
  });
  it('should return the incremented array', () => {
    expect(incrementer([3, 6, 9, 8, 9])).toEqual([4, 8, 2, 2, 4]);
  });
});

import { getEvenNumbers } from './solution';
import { describe, it, expect } from 'bun:test';

describe('getEvenNumbers', () => {
  it('should be return an array', () => {
    expect(getEvenNumbers([1, 2, 3, 4, 5, 6])).toBeInstanceOf(Array);
  });
  it('should return an array of even numbers', () => {
    expect(getEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
  });
});

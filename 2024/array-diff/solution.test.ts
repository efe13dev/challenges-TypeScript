import { arrayDiff } from './solution';
import { describe, it, expect } from 'bun:test';

describe('arrayDiff', () => {
  it('should be return an array', () => {
    expect(arrayDiff([1, 2], [1])).toBeInstanceOf(Array);
  });
  it('should return the difference between two arrays', () => {
    expect(arrayDiff([1, 2], [1])).toEqual([2]);
  });
});

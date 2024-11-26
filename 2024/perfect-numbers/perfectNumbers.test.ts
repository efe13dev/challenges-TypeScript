import { describe, it, expect } from 'bun:test';
import { perfectNumbers } from './perfectNumbers';

describe('perfectNumbers', () => {
  it('should be return an array', () => {
    expect(perfectNumbers(10)).toBeInstanceOf(Array);
  });
  it('should return an array of perfect numbers', () => {
    expect(perfectNumbers(3)).toEqual([1, 3]);
  });
  it('should return an array of perfect numbers', () => {
    expect(perfectNumbers(5)).toEqual([1, 3, 5]);
  });
  it('should return an array of perfect numbers', () => {
    expect(perfectNumbers(7)).toEqual([1, 3, 5, 7]);
  });
});

import { describe, expect, it } from 'bun:test';
import { countByX } from './countByX';

describe('countByX', () => {
  it('should return an array', () => {
    expect(countByX(1, 10)).toBeInstanceOf(Array);
  });
  it('should return array counting by 1 up to 10', () => {
    expect(countByX(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('should return array counting by 2 up to 5 multiples', () => {
    expect(countByX(2, 5)).toEqual([2, 4, 6, 8, 10]);
  });
});

import { describe, it, expect } from 'bun:test';
import { sumCubes } from './sum-cubes';

describe('sumCubes', () => {
  it('should return a number', () => {
    expect(sumCubes(2)).toBeTypeOf('number');
  });

  it('should return 9 for input 2', () => {
    expect(sumCubes(2)).toBe(9);
  });

  it('should return 36 for input 3', () => {
    expect(sumCubes(3)).toBe(36);
  });
});

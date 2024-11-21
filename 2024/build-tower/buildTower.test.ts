import { describe, it, expect } from 'bun:test';
import { buildTower } from './buildTower';

describe('buildTower', () => {
  it('should return an array', () => {
    expect(buildTower(1)).toBeInstanceOf(Array);
  });

  it('should build a tower with 1 floor', () => {
    expect(buildTower(1)).toEqual(['*']);
  });

  it('should build a tower with 2 floors', () => {
    expect(buildTower(2)).toEqual([' * ', '***']);
  });

  it('should build a tower with 3 floors', () => {
    expect(buildTower(3)).toEqual(['  *  ', ' *** ', '*****']);
  });

  it('should build a tower with 4 floors', () => {
    expect(buildTower(4)).toEqual(['   *   ', '  ***  ', ' ***** ', '*******']);
  });
});

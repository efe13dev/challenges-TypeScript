import { describe, it, expect } from 'bun:test';
import { newAvg } from './lookingBenefactor';

describe('newAvg', () => {
  it('should return 149 for donations [14, 30, 5, 7, 9, 11, 15] and new average 30', () => {
    expect(newAvg([14, 30, 5, 7, 9, 11, 15], 30)).toBe(149);
  });

  it('should return 645 for donations [14, 30, 5, 7, 9, 11, 15] and new average 92', () => {
    expect(newAvg([14, 30, 5, 7, 9, 11, 15], 92)).toBe(645);
  });

  it('should throw an error for donations [14, 30, 5, 7, 9, 11, 15] and new average 2', () => {
    expect(() => newAvg([14, 30, 5, 7, 9, 11, 15], 2)).toThrow(
      'Expected New Average is too low'
    );
  });

  it('should return 1 for donations [] and new average 1', () => {
    expect(newAvg([], 1)).toBe(1);
  });

  it('should throw an error for donations [100, 200, 300] and new average 50', () => {
    expect(() => newAvg([100, 200, 300], 50)).toThrow(
      'Expected New Average is too low'
    );
  });
});

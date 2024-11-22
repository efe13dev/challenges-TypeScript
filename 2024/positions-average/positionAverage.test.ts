import { expect, it, describe } from 'bun:test';
import { posAverage } from './positionAverage';

describe('posAverage', () => {
  it('should return a number', () => {
    expect(posAverage('0, 1, 2, 3')).toBeTypeOf('number');
  });
  it('should calculate the correct percentage for basic input', () => {
    expect(
      posAverage(
        '466960, 069060, 494940, 060069, 060090, 640009, 496464, 606900, 004000, 944096'
      )
    ).toBeCloseTo(26.6667, 4);
  });

  it('should handle small input', () => {
    expect(
      posAverage(
        '444996, 699990, 666690, 096904, 600644, 640646, 606469, 409694, 666094, 606490'
      )
    ).toBeCloseTo(29.2593, 4);
  });

  it('should handle different input', () => {
    expect(posAverage('0, 1, 2, 3')).toBeCloseTo(0, 4);
  });

  it('should handle identical numbers', () => {
    expect(posAverage('1111, 1111, 1111')).toBeCloseTo(100, 4);
  });
});

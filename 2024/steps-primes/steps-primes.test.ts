import { describe, expect, it } from 'bun:test';

import { step } from './steps-primes';

describe('step', () => {
  it('should return an array or null when there are no steps between m and n', () => {
    expect(step(2, 5, 7)).toBeInstanceOf(Array);
    expect(step(2, 5, 5)).toBeNull();
  });

  it('should find prime pair [5, 7] with step of 4', () => {
    expect(step(4, 100, 110)).toEqual([103, 107]);
  });

  it('should find prime pair [101, 103] with step of 2', () => {
    expect(step(2, 100, 110)).toEqual([101, 103]);
  });
});

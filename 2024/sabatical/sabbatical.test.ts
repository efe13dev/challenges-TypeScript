import { describe, expect, it } from 'bun:test';
import { sabbatical } from './sabbatical';

describe('sabbatical', () => {
  it('should return a type string', () => {
    expect(sabbatical(10, 5, 'sabbatical')).toBeTypeOf('string');
  });
  it('should return "Sabbatical! Boom!" if the sum of the parameters is greater than 22', () => {
    expect(sabbatical(10, 5, 'sabbatical')).toBe('Sabbatical! Boom!');
  });
});

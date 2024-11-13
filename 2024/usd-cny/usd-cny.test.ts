import { describe, it, expect } from 'bun:test';
import { usdToCny } from './usd-cny';

describe('usdToCny', () => {
  it('should return a string', () => {
    expect(usdToCny(15)).toBeTypeOf('string');
  });
  it('should convert USD to CNY', () => {
    expect(usdToCny(15)).toBe('101.25 Chinese Yuan');
  });
});

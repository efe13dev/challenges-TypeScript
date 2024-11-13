import { describe, it, expect } from 'bun:test';
import { ipToInt32 } from './ipv4-to-int32';

describe('ipToInt32', () => {
  it('should return a number', () => {
    expect(ipToInt32('128.32.10.1')).toBeTypeOf('number');
  });
  it('should convert an IPv4 address to a 32-bit integer', () => {
    expect(ipToInt32('128.32.10.1')).toBe(2149583361);
  });
});

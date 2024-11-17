import { describe, it, expect } from 'bun:test';
import { encode, decode } from './vowelCode';

describe('encode', () => {
  it('should return a string', () => {
    expect(encode('hello')).toBeTypeOf('string');
  });
  it('should encode a string', () => {
    expect(encode('hello')).toBe('h2ll4');
  });
});

describe('decode', () => {
  it('should return a string', () => {
    expect(decode('h2ll4')).toBeTypeOf('string');
  });
  it('should decode a string', () => {
    expect(decode('h2ll4')).toBe('hello');
  });
});

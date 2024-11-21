import { describe, expect, it } from 'bun:test';
import { trimString } from './trimmingString';

describe('trimString', () => {
  it('should return a string', () => {
    expect(trimString('Hello', 10)).toBeTypeOf('string');
  });
  it('should return the string if it is shorter than the maximum length', () => {
    expect(trimString('Hello', 10)).toBe('Hello');
  });
  it('should return the string with ... if it is longer than the maximum length', () => {
    expect(trimString('Hello', 3)).toBe('Hel...');
  });
  it('should return the string with ... if it is longer than the maximum length', () => {
    expect(trimString('Creating kata is fun', 14)).toBe('Creating ka...');
  });
});

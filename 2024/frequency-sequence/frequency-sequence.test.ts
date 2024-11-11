import { describe, expect, it } from 'bun:test';
import { frequencySequence } from './frequency-sequence';

describe('frequencySequence', () => {
  it('should return a string', () => {
    expect(frequencySequence('hello world', '-')).toBeTypeOf('string');
  });
  it('should return the correct output', () => {
    expect(frequencySequence('hello world', '-')).toBe('1-1-3-3-2-1-1-2-1-3-1');
  });
  it('should return the correct output for the second example', () => {
    expect(frequencySequence('19999999', ':')).toBe('1:7:7:7:7:7:7:7');
  });
  it('should return the correct output for the third example', () => {
    expect(frequencySequence('^^^**$', 'x')).toBe('3x3x3x2x2x1');
  });
});

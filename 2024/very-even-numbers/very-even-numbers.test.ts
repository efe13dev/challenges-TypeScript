import { describe, expect, it } from 'bun:test';
import { isVeryEvenNumber } from './very-even-numbers';

describe('isVeryEvenNumber', () => {
  it('should return true for a very even number', () => {
    expect(isVeryEvenNumber(222)).toBe(true);
  });

  it('should return false for a not very even number', () => {
    expect(isVeryEvenNumber(88)).toBe(false);
  });
});

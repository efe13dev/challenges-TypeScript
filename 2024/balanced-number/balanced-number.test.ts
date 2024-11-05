import { describe, expect, it } from 'bun:test';
import { balancedNum } from './solution';

describe('balancedNum', () => {
  it('should return "Balanced" for a balanced number', () => {
    expect(balancedNum(7)).toBe('Balanced');
  });
  it('should return "Not Balanced" for a not balanced number', () => {
    expect(balancedNum(295591)).toBe('Not Balanced');
  });
});

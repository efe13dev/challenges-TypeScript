import { describe, it, expect } from 'bun:test';
import { checkExam } from './check-exam';

describe('checkExam', () => {
  it('should return 6', () => {
    expect(checkExam(['a', 'a', 'b', 'b'], ['a', 'c', 'b', 'd'])).toBe(6);
  });
  it('should be return 0', () => {
    expect(checkExam(['b', 'c', 'b', 'a'], ['', 'a', 'a', 'c'])).toBe(0);
  });
  it('should be return 7', () => {
    expect(checkExam(['a', 'a', 'c', 'b'], ['a', 'a', 'b', ''])).toBe(7);
  });
});

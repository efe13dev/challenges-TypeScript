import { describe, expect, it } from 'bun:test';
import { reversedSequence } from './reversed-sequence';

describe('reversedSequence', () => {
  it('it should be return an array type', () => {
    expect(reversedSequence(5)).toBeInstanceOf(Array);
  });
  it('should return an array of integers from n to 1 where n>0', () => {
    expect(reversedSequence(5)).toEqual([5, 4, 3, 2, 1]);
  });
  it('should return a empty array if n=0', () => {
    expect(reversedSequence(0)).toEqual([]);
  });
});

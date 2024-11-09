import { describe, it, expect } from 'bun:test';
import { replaceAlphabet } from './replace-alphabet';

describe('replaceAlphabet', () => {
  it('should be return a string', () => {
    expect(replaceAlphabet('')).toBeTypeOf('string');
  });
  it('should return the correct output', () => {
    expect(replaceAlphabet("The sunset sets at twelve o' clock.")).toEqual(
      '20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11'
    );
  });
});

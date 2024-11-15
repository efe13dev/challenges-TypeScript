import { describe, it, expect } from 'bun:test';
import { longestVowelChain } from './longest-vowel-chain';

describe('longestVowelChain', () => {
  it('should return a number', () => {
    expect(longestVowelChain('codewarriors')).toBeTypeOf('number');
  });
  it('should return the length of the longest vowel chain', () => {
    expect(longestVowelChain('codewarriors')).toBe(2);
  });
});

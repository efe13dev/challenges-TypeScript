import { describe, expect, it } from 'bun:test';
import { high } from './scoringWord';

describe('Scoring Word', () => {
  it('should return the highest scoring word', () => {
    expect(high('man i need a taxi up to ubud')).toBe('taxi');
  });

  it('should return the first word when there is a tie', () => {
    expect(high('aa b')).toBe('aa'); // both 'aa' and 'b' score 2
  });

  it('should handle single letter words', () => {
    expect(high('b aa')).toBe('b'); // 'b' scores 2, 'aa' scores 2 but 'b' comes first
  });

  it('should handle longer sentences', () => {
    expect(high('what time are we climbing up to the volcano')).toBe('volcano');
  });

  it('should work with repeated words', () => {
    expect(high('aa aa aa')).toBe('aa'); // should return the first occurrence
  });
});

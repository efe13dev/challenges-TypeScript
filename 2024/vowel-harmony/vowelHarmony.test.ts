import { describe, expect, it } from 'bun:test';
import { vowelHarmony } from './vowelHarmony';

describe('vowelHarmony', () => {
  it('should add -nak to word with back vowel', () => {
    expect(vowelHarmony('ablak')).toBe('ablaknak');
  });

  it('should add -nek to word with front vowel', () => {
    expect(vowelHarmony('szék')).toBe('széknek');
  });

  it('should use last vowel for mixed vowel word', () => {
    expect(vowelHarmony('kávé')).toBe('kávének');
  });

  it('should add -nek to word without vowels', () => {
    expect(vowelHarmony('krk')).toBe('krknek');
  });

  it('should add -nek to empty string', () => {
    expect(vowelHarmony('')).toBe('nek');
  });
});

import { describe, expect, it } from 'bun:test';

import { vowelHarmony } from './vowelHarmony';

describe('vowelHarmony', () => {
  it('should convert all vowels to uppercase', () => {
    expect(vowelHarmony('hello')).toBe('hEllO');
  });

  it('should handle strings with multiple vowels', () => {
    expect(vowelHarmony('beautiful')).toBe('bEAUtIfUl');
  });

  it('should handle strings with no vowels', () => {
    expect(vowelHarmony('rhythm')).toBe('rhythm');
  });

  it('should handle empty strings', () => {
    expect(vowelHarmony('')).toBe('');
  });

  it('should handle strings with all vowels', () => {
    expect(vowelHarmony('aeiou')).toBe('AEIOU');
  });

  it('should handle strings with spaces and special characters', () => {
    expect(vowelHarmony('hello world!')).toBe('hEllO wOrld!');
  });

  it('should not modify already uppercase vowels', () => {
    expect(vowelHarmony('hEllo')).toBe('hEllO');
  });
});

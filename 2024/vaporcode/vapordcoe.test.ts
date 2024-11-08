import { describe, expect, test } from 'bun:test';
import { vaporcode } from './vaporcode';

describe('vaporcode', () => {
  test('should convert a sentence to vaporwave', () => {
    expect(vaporcode('Lets go to the movies')).toBe(
      'L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S'
    );
  });
});

import { describe, it, expect } from 'bun:test';
import { wallpaper } from './easyWallpaper';

describe('wallpaper', () => {
  it('should return a string', () => {
    expect(wallpaper(4.0, 3.5, 3.0)).toBeTypeOf('string');
  });
  it('should return the correct number of rolls', () => {
    expect(wallpaper(6.3, 4.5, 3.29)).toBe('sixteen');
  });
});

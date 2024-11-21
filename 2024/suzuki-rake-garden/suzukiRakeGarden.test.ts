import { describe, expect, it } from 'bun:test';
import { rakeGarden } from './suzukiRakeGarden';

describe('SuzukiRakeGarden', () => {
  it('should return a string', () => {
    expect(rakeGarden('slug spider rock gravel')).toBeTypeOf('string');
  });
  it('should replace insects with gravel', () => {
    expect(rakeGarden('slug spider rock gravel')).toBe(
      'gravel gravel rock gravel'
    );
  });

  it('should not modify rock and gravel elements', () => {
    expect(rakeGarden('rock gravel rock gravel')).toBe(
      'rock gravel rock gravel'
    );
  });

  it('should handle empty string', () => {
    expect(rakeGarden('')).toBe('gravel');
  });

  it('should handle string with multiple unwanted elements', () => {
    expect(rakeGarden('ant moss spider rock snail slug gravel')).toBe(
      'gravel gravel gravel rock gravel gravel gravel'
    );
  });
});

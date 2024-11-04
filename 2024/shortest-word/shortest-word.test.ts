import { findShort } from './shortest-word';
import { describe, it, expect } from 'bun:test';

describe('findShort', () => {
  it('should be return a number', () => {
    expect(
      findShort('bitcoin take over the world maybe who knows perhaps')
    ).toBeTypeOf('number');
  });
  it('should return the length of the shortest word', () => {
    expect(
      findShort('bitcoin take over the world maybe who knows perhaps')
    ).toBe(3);
  });
});

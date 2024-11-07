import { describe, expect, it } from 'bun:test';
import { bouncingBalls } from './bouncing-balls';

describe('bouncingBalls', () => {
  it('should return 3', () => {
    expect(bouncingBalls(3, 0.66, 1.5)).toBe(3);
  });
  it('should return 15', () => {
    expect(bouncingBalls(30.0, 0.66, 1.5)).toBe(15);
  });
});

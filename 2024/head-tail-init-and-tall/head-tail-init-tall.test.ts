import { describe, expect, it } from 'bun:test';
import { head, tail, init, tall } from './head-tail-init-tall';

describe('head', () => {
  it('should return the first element of the array', () => {
    expect(head([1, 2, 3, 4, 5])).toBe(1);
  });
});

describe('tail', () => {
  it('should return the array without the first element', () => {
    expect(tail([1, 2, 3, 4, 5])).toEqual([2, 3, 4, 5]);
  });
});

describe('init', () => {
  it('should return the array without the last element', () => {
    expect(init([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4]);
  });
});

describe('tall', () => {
  it('should return the last element of the array', () => {
    expect(tall([1, 2, 3, 4, 5])).toBe(5);
  });
});

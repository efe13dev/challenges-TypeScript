import { describe, it, expect } from 'bun:test';
import { pendulum } from './pendulum';

describe('pendulum', () => {
  it('should return the correct pendulum arrangement', () => {
    expect(pendulum([5, 4, 6, 7, 8])).toEqual([8, 6, 4, 5, 7]);
  });
});

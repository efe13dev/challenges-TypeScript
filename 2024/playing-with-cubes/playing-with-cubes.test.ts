import { describe, it, expect } from 'bun:test';
import { Cube } from './playing-with-cubes';

describe('Cube', () => {
  it('should be return 0 when no side is provided', () => {
    const cube = new Cube();
    expect(cube.getSide()).toBe(0);
  });
  it('should create a cube with a given side', () => {
    const cube = new Cube(3);
    expect(cube.getSide()).toBe(3);
  });
});

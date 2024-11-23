import { expect, it } from 'bun:test';
import { feastBeast } from './feastBeast';

it('should return true for beast = "great blue heron" and dish = "garlic naan"', () => {
  expect(feastBeast('great blue heron', 'garlic naan')).toBe(true);
});

it('should return true for beast = "chickadee" and dish = "chocolate cake"', () => {
  expect(feastBeast('chickadee', 'chocolate cake')).toBe(true);
});

it('should return false for beast = "bear" and dish = "cake"', () => {
  expect(feastBeast('bear', 'cake')).toBe(false);
});

it('should return false for beast = "duck" and dish = "dried rice"', () => {
  expect(feastBeast('duck', 'dried rice')).toBe(false);
});

import { bmi } from './calculate-BMI';
import { describe, it, expect } from 'bun:test';

describe('bmi', () => {
  it('should be return a string', () => {
    expect(bmi(50, 1.7)).toBeTypeOf('string');
  });
  it('should return "Underweight" for a BMI of 18.5', () => {
    expect(bmi(50, 1.7)).toBe('Underweight');
  });
  it('should return "Normal" for a BMI of 25.0', () => {
    expect(bmi(80, 1.8)).toBe('Normal');
  });
  it('should return "Overweight" for a BMI of 30.0', () => {
    expect(bmi(90, 1.8)).toBe('Overweight');
  });
  it('should return "Obese" for a BMI of 30.0', () => {
    expect(bmi(110, 1.8)).toBe('Obese');
  });
});

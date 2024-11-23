import { expect, it, describe } from 'bun:test';
import { strongNumber } from './strongNumber';

describe('Strong Number test', () => {
  it('should return STRONG!!!! for number 1', () => {
    expect(strongNumber(1)).toBe('STRONG!!!!');
  });

  it('should return Not Strong !! for number 123', () => {
    expect(strongNumber(123)).toBe('Not Strong !!');
  });

  it('should return STRONG!!!! for number 145', () => {
    expect(strongNumber(145)).toBe('STRONG!!!!');
  });

  it('should return Not Strong !! for number 150', () => {
    expect(strongNumber(150)).toBe('Not Strong !!');
  });

  it('should return STRONG!!!! for number 40585', () => {
    expect(strongNumber(40585)).toBe('STRONG!!!!');
  });
});

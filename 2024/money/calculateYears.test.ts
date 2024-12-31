import { describe, it, expect } from 'bun:test';
import { calculateYears } from './calculateYears';

describe('calculateYears', () => {
  it('debería devolver 0 cuando el principal es igual a la suma deseada', () => {
    expect(calculateYears(1000, 0.05, 0.18, 1000)).toBe(0);
  });

  it('debería devolver 3 años para el ejemplo del README', () => {
    expect(calculateYears(1000, 0.05, 0.18, 1100)).toBe(3);
  });

  it('debería manejar tasas de interés más altas', () => {
    expect(calculateYears(1000, 0.1, 0.18, 1200)).toBe(2);
  });

  it('debería manejar tasas de impuestos más bajas', () => {
    expect(calculateYears(1000, 0.05, 0.05, 1100)).toBe(2);
  });

  it('debería manejar sumas deseadas significativamente más altas', () => {
    expect(calculateYears(1000, 0.05, 0.18, 2000)).toBe(15);
  });
});

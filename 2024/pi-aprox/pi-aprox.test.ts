import { expect, test, describe } from "bun:test";
import { iterPi } from './pi-aprox';

describe('PI Approximation', () => {
    test('should approximate PI with epsilon 0.001', () => {
        const [iterations, pi] = iterPi(0.001);
        expect(Math.abs(pi - Math.PI)).toBeLessThan(0.001);
        expect(iterations).toBeGreaterThan(0);
    });

    test('should approximate PI with epsilon 0.01', () => {
        const [iterations, pi] = iterPi(0.01);
        expect(Math.abs(pi - Math.PI)).toBeLessThan(0.01);
        expect(iterations).toBeGreaterThan(0);
    });

    test('should approximate PI with epsilon 0.1', () => {
        const [iterations, pi] = iterPi(0.1);
        expect(Math.abs(pi - Math.PI)).toBeLessThan(0.1);
        expect(iterations).toBeGreaterThan(0);
    });

    test('should throw error for negative epsilon', () => {
        expect(() => iterPi(-0.001)).toThrow('Epsilon must be a positive number');
    });
});

import { calculate } from './index.js';

describe('calculate', () => {
  test('adds two numbers correctly', () => {
    expect(calculate(1, 2, 'add')).toBe(3);
  });

  test('subtracts two numbers correctly', () => {
    expect(calculate(5, 2, 'subtract')).toBe(3);
  });

  test('throws an error for invalid operation', () => {
    expect(() => calculate(1, 2, 'invalid')).toThrow('Invalid operation');
  });
});

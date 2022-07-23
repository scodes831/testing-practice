const calculator = require('./calculator');

test('add two positive numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test('add two negative numbers', () => {
    expect(calculator.add(-2, -2)).toBe(-4);
});

test('subtract two positive numbers with negative result', () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
});

test('subtract two positive numbers with positive result', () => {
    expect(calculator.subtract(3, 1)).toBe(2);
});

test('subtract two negative numbers with zero result', () => {
    expect(calculator.subtract(-2, -2)).toBe(0);
});

test('multiply two positive numbers', () => {
    expect(calculator.multiply(2, 2)).toBe(4);
});

test('multiply two negative numbers', () => {
    expect(calculator.multiply(-2, -2)).toBe(4);
});

test('divide by positive whole numbers', () => {
    expect(calculator.divide(2, 2)).toBe(1);
});

test('divide by negative whole numbers', () => {
    expect(calculator.divide(-3, -1)).toBe(3);
});

test('divide by decimal number', () => {
    expect(calculator.divide(3, 1.5)).toBe(2);
});
const Calculator = require('./calculator');

let calculator = new Calculator();

test('checks if a number is missing', () => {
    expect(calculator.add(1)).toBe(-1)
})

test('addition of numbers works', () => {
    expect(calculator.add(4, 4)).toBe(8);
})

test('subtraction of numbers works', () => {
    expect(calculator.subtract(8, 4)).toBe(4);
})

test('multiplication of numbers works', () => {
    expect(calculator.multiply(4, 4)).toBe(16);
})

test('division of numbers works', () => {
    expect(calculator.divide(8, 4)).toBe(2);
})

test('checks division by 0', () => {
    expect(calculator.divide(4, 0)).toBe(-1);
})
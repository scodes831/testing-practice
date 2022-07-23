const capitalize = require('./index');

test('capitalize first letter of string', () => {
    expect(capitalize("hi")).toBe("Hi");
});

test('ignore already capitalized letters', () => {
    expect(capitalize("Hi")).toBe("Hi");
});

test('ignore numbers', () => {
    expect(capitalize("1hi")).toBe("1hi")
});

test('ignore special characters', () => {
    expect(capitalize("$$$hi")).toBe("$$$hi");
});

test('works with multiple words', () => {
    expect(capitalize("hi hello")).toBe("Hi hello");
});
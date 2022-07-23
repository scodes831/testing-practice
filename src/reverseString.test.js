const reverseString = require('./reverseString');

test('reverse one word string', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('reverse multi word string', () => {
    expect(reverseString('hello there')).toBe('ereht olleh');
});

test('reverse with numbers', () => {
    expect(reverseString('he110 2here8')).toBe('8ereh2 011eh');
});

test('reverse with numbers only', () => {
    expect(reverseString('12345')).toBe('54321');
});

test('reverse with multiple blocks of numbers', () => {
    expect(reverseString('123 456 789')).toBe('987 654 321');
});

test('reverse with special characters', () => {
    expect(reverseString('h@l$oo')).toBe('oo$l@h');
});

test('reverse with special characters and numbers', () => {
    expect(reverseString('h@l$00 th3r3')).toBe('3r3ht 00$l@h');
});
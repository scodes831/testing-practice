const caesarCipher = require('./caesarCipher');

test('use cipher on lowercase string', () => {
    expect(caesarCipher('hi')).toBe('kl');
});

test('use cipher with first letter capitalized', () => {
    expect(caesarCipher('Hi')).toBe('Kl');
});

test('use cipher on all caps string', () => {
    expect(caesarCipher('HELLO')).toBe('KHOOR');
});

test('user cipher on alphanumeric string', () => {
    expect(caesarCipher('H3llo')).toBe('K3oor');
});

test('use cipher on multi-word string', () => {
    expect(caesarCipher('Hi there')).toBe('Kl wkhuh');
});
const caesarCipher = require('./caesarCipher');

test('shifts a simple string', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd');
})

test('wraps around alphabet', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
})

test('shifts string with different cases', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
})

test('punctuations, spaces, and other non-alphabetical characters should remain the same', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})

test('works with negative shift', () => {
    expect(caesarCipher('Mjqqt, Btwqi!', -5)).toBe('Hello, World!');
});

test('works with large negative shift factors', () => {
    expect(caesarCipher('Hello, World!', -29)).toBe('Ebiil, Tloia!');
  });


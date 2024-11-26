const reverseString = require('./reverseString');

test('does nothing to an empty string', () => {
    expect(reverseString()).toBe('');
})

test('returns a single character', () => {
    expect(reverseString('a')).toBe('a');
})

test('reverses a single word', () => {
    expect(reverseString('svelte')).toBe('etlevs');
})

test('reverses a sentence', () => {
    expect(reverseString('vue is a js framework')).toBe('krowemarf sj a si euv');
})
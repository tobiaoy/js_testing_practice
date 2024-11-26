const capitalize = require('./capitalize');

test('returns an empty string', () => {
    expect(capitalize()).toBe('');
})

test('capitalizes one letter', () => {
    expect(capitalize('a')).toBe('A');
})

test('capitalizes one word', () => {
    expect(capitalize('svelte')).toBe('Svelte');
})

test('capitalizes a sentence', () => {
    expect(capitalize('vue is a js framework')).toBe('Vue is a js framework');
})
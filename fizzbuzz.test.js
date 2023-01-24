const fizzbuzz = require('./fizzbuzz');

test('1 is a string', () => {
    expect(fizzbuzz(1)).toMatch(/\d+/);
})

test('3 is fizz', () => {
    expect(fizzbuzz(3)).toBe('fizz');
})

test('5 is buzz', () => {
    expect(fizzbuzz(5)).toBe('buzz');
})
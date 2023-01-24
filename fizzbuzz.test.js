const fizzbuzz = require('./fizzbuzz');

test('1 is a string', () => {
    expect(fizzbuzz(1)).toBe('1');
})

test('3 is fizz', () => {
    expect(fizzbuzz(3)).toBe('fizz');
})
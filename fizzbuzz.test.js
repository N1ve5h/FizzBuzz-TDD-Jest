const fizzbuzz = require('./fizzbuzz');

test('1 is a string', () => {
    expect(fizzbuzz(1)).toBe('1');
})
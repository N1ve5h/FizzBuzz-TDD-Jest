const fizzbuzz = (num) => {
    if (!(num % 3)) return 'fizz';
    if (!(num % 5)) return 'buzz';
    return num.toString();
}

module.exports = fizzbuzz;
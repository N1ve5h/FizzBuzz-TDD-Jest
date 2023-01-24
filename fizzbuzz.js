const fizzbuzz = (num) => {
    let fizzorbuzz = '';
    if (!(num % 3)) fizzorbuzz+='fizz';
    if (!(num % 5)) fizzorbuzz+='buzz';
    if (!(fizzorbuzz.length)) return num.toString();
    return fizzorbuzz;
}

module.exports = fizzbuzz;
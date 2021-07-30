function convert(a) {

    const number = a % 10;

    if (number > 0 && number < 4) {
      return [...Array(number)].reduce(acc => acc + 'I' , '');
    }

    if (number === 4) {
      return 'IV';
    }

    if (number === 5) {
      return 'V';
    }

    if (number > 5) {
      return 'VI';
    }

    return '💩';
}

module.exports = convert;
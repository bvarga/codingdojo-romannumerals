function convert(a) {

    const number = a % 10;

    let result = '';
    if (number > 3) {
      result = 'V';
    }

    if (number > 0 && number < 4) {
      return [...Array(number)].reduce(acc => acc + 'I' , result);
    }
    if (number === 4) {
      return 'I' + result;
    }

    if (number > 5) {
      return [...Array(number -5)].reduce(acc => acc + 'I' , result);

    }

    return result;

    // return '💩';
}

module.exports = convert;
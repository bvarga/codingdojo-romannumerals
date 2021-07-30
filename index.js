const definitions = {
  1: {
    base: '',
    prefix: 1,
    suffix: 0,
  },
  2: {
    base: '',
    prefix: 2,
    suffix: 0,
  },
  3: {
    base: '',
    prefix: 3,
    suffix: 0,
  },
  4: {
    base: 'V',
    prefix: 1,
    suffix: 0,
  },
  5: {
    base: 'V',
    prefix: 0,
    suffix: 0,
  },
  6: {
    base: 'V',
    prefix: 0,
    suffix: 1,
  },
  7: {
    base: 'V',
    prefix: 0,
    suffix: 2,
  },
  8: {
    base: 'V',
    prefix: 0,
    suffix: 3,
  },
  9: {
    base: 'X',
    prefix: 1,
    suffix: 0,
  },
  0: {
    base: 'X',
    prefix: 0,
    suffix: 0,
  },
}

function convert(a) {
  if (a === 0) {
    throw new Error(`Romans don't know 0`);
  }

  let result = '';

  if (a > 10) {
    result = 'X';
  }

  const number = a % 10;
  return result
    + [...Array(definitions[number].prefix)].reduce(acc => acc + 'I', '')
    + definitions[number].base
    + [...Array(definitions[number].suffix)].reduce(acc => 'I' + acc, '')
}

module.exports = convert;
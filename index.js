const triplets = {
  1: ['I', 'V', 'X'],
  2: ['X', 'L', 'C'],
  3: ['C', 'D', 'M'],
  4: ['M'],
};

const RomanNumbers = {
  1: triplet => triplet[0],
  2: triplet => triplet[0].repeat(2),
  3: triplet => triplet[0].repeat(3),
  4: triplet => triplet[0] + triplet[1],
  5: triplet => triplet[1],
  6: triplet => triplet[1] + triplet[0],
  7: triplet => triplet[1] + triplet[0].repeat(2),
  8: triplet => triplet[1] + triplet[0].repeat(3),
  9: triplet => triplet[0] + triplet[2],
  0: () => '',
}

function convert(a) {
  if (a === 0) {
    throw new Error(`Romans don't know 0`);
  }

  let number = a;
  let i = 1;
  let result = '';
  while (number > 0) {
    const digit = number % 10;
    result = RomanNumbers[digit](triplets[i]) + result;
    number = Math.floor(number / 10);
    i += 1;
  }

  return result;
}

module.exports = convert;
const Signs = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

const RomanNumbers = {
  0: () => '',
  1: start => Signs[start],
  2: start => Signs[start].repeat(2),
  3: start => Signs[start].repeat(3),
  4: start => Signs[start] + Signs[start + 1],
  5: start => Signs[start + 1],
  6: start => Signs[start + 1] + Signs[start],
  7: start => Signs[start + 1] + Signs[start].repeat(2),
  8: start => Signs[start + 1] + Signs[start].repeat(3),
  9: start => Signs[start] + Signs[start + 2],
}

function convert(arab) {
  if (arab === 0) {
    throw new Error(`Romans don't know 0`);
  }
  let number = arab;
  let decimalPlace = 0;
  let result = '';
  while (number > 0) {
    const digit = number % 10;
    result = RomanNumbers[digit](decimalPlace * 2) + result;
    number = Math.floor(number / 10);
    decimalPlace += 1;
  }
  return result;
}

module.exports = convert;
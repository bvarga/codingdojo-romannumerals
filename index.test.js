let convert = require('./index');
const expectations = [
    [1, 'I'],
    [2, 'II'],
    [3, 'III'],
    [4, 'IV'],
    [5, 'V'],
    [6, 'VI'],
    [7, 'VII'],
    [8, 'VIII'],
    [9, 'IX'],
    [10, 'X'],
];

describe('test sum function', () => {
    test.each(expectations)('convert(%i) should return %s', (a, result) => {
        expect(convert(a)).toEqual(result);
    });
});

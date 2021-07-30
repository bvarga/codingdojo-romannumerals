let convert = require('./index');
const expectations = [
    [1, 'I'],
    [2, 'II'],
    [3, 'III'],
    [4, 'IV'],
];

describe('test sum function', () => {
    test.each(expectations)('convert(%i) should return %i', (a, result) => {
        expect(convert(a)).toEqual(result);
    });
});

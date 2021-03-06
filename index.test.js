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
    [11, 'XI'],
    [12, 'XII'],
    [13, 'XIII'],
    [14, 'XIV'],
    [15, 'XV'],
    [16, 'XVI'],
    [17, 'XVII'],
    [18, 'XVIII'],
    [19, 'XIX'],
    [20, 'XX'],
    [30, 'XXX'],
    [40, 'XL'],
    [1980, 'MCMLXXX']
];

describe('test sum function', () => {
    test.each(expectations)('convert(%i) should return %s', (a, result) => {
        expect(convert(a)).toEqual(result);
    });

    test.skip('zero', () => {
      const zero = () => {
        convert(0);
      };
      expect(zero).toThrow();
    })
});

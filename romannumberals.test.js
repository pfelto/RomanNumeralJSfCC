/* eslint-disable no-undef */
const convertToRoman = require('./romannumerals');

test('Roman Numeral of 4 should be IV', () => {
  expect(convertToRoman(4)).toBe('IV');
});

test('Roman Numeral of 798 should be DCCXCVIII', () => {
  expect(convertToRoman(798)).toBe('DCCXCVIII');
});

// check size of the number
function romanNumeral(num) {
  const ROMAN_SYMBOLS = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };
  let str = '';
  let remainder = num;
  while (remainder > 0) {
    if (remainder >= ROMAN_SYMBOLS.M) {
      str += 'M';
      remainder -= ROMAN_SYMBOLS.M;
    } else if (remainder >= ROMAN_SYMBOLS.CM) {
      str += 'CM';
      remainder -= ROMAN_SYMBOLS.CM;
    } else if (remainder >= ROMAN_SYMBOLS.D) {
      str += 'D';
      remainder -= ROMAN_SYMBOLS.D;
    } else if (remainder >= ROMAN_SYMBOLS.CD) {
      str += 'CD';
      remainder -= ROMAN_SYMBOLS.CD;
    } else if (remainder >= ROMAN_SYMBOLS.C) {
      str += 'C';
      remainder -= ROMAN_SYMBOLS.C;
    } else if (remainder >= ROMAN_SYMBOLS.XC) {
      str += 'XC';
      remainder -= ROMAN_SYMBOLS.XC;
    } else if (remainder >= ROMAN_SYMBOLS.L) {
      str += 'L';
      remainder -= ROMAN_SYMBOLS.L;
    } else if (remainder >= ROMAN_SYMBOLS.XL) {
      str += 'XL';
      remainder -= ROMAN_SYMBOLS.XL;
    } else if (remainder >= ROMAN_SYMBOLS.X) {
      str += 'X';
      remainder -= ROMAN_SYMBOLS.X;
    } else if (remainder >= ROMAN_SYMBOLS.IX) {
      str += 'IX';
      remainder -= ROMAN_SYMBOLS.IX;
    } else if (remainder >= ROMAN_SYMBOLS.V) {
      str += 'V';
      remainder -= ROMAN_SYMBOLS.V;
    } else if (remainder >= ROMAN_SYMBOLS.IV) {
      str += 'IV';
      remainder -= ROMAN_SYMBOLS.IV;
    } else {
      str += 'I';
      remainder -= ROMAN_SYMBOLS.I;
    }
  }
  return str;
}

function convertToRoman(num) {
  const ones = num % 10;
  const tens = (num - ones) % 100;
  const hundreds = (num - tens - ones) % 1000;
  const thousands = (num - hundreds - tens - ones) % 10000;

  const romanNumeralsStringOnes = romanNumeral(ones);
  const romanNumeralsStringTens = romanNumeral(tens);
  const romanNumeralsStringHundreds = romanNumeral(hundreds);
  const romanNumeralsStringThousands = romanNumeral(thousands);

  const finalRomanNumeralsString = romanNumeralsStringThousands + romanNumeralsStringHundreds
  + romanNumeralsStringTens + romanNumeralsStringOnes;

  // console.log(finalRomanNumeralsString);
  return finalRomanNumeralsString;
}

module.exports = convertToRoman;

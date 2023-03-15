import { romanToInt } from './13 - Roman to Integer';

describe('romandToInt', () => {
  test.each([
    ['III', 3],
    ['LVIII', 58],
    ['MCMXCIV', 1994]
  ])('Should convert %p to %p', (romanNumeral, output) => {
    expect(romanToInt(romanNumeral)).toBe(output);
  });
});
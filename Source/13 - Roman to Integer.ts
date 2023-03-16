/**
 * {@link https://leetcode.com/problems/roman-to-integer/ | Roman to Integer}
 * 
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
 * 
 * Symbol = Value
 * - I = 1
 * - V = 5
 * - X = 10
 * - L = 50
 * - C = 100
 * - D = 500
 * - M = 1000
 * 
 * For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
 * 
 * Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
 * - I can be placed before V (5) and X (10) to make 4 and 9. 
 * - X can be placed before L (50) and C (100) to make 40 and 90. 
 * - C can be placed before D (500) and M (1000) to make 400 and 900.
 * 
 * Given a roman numeral, convert it to an integer.
 * 
 * Constraints:
 * - 1 \<= s.length \<= 15
 * - s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
 * - It is guaranteed that s is a valid roman numeral in the range [1, 3999].
 */
export function romanToInt(romanNumeral: string): number {

  // I: V (5), X (10), Neither (1) - if we encounter these two numeral patterns, move forward twice
  // X: L (5), C (100), Neither (10)
  // C: D (500), M (1000), Neither (100)
  // Match the 1 or 2 digit pattern to a number, add that number to the final result

  let numberTotal = 0;

  // Struggled with this syntax in first try
  const numerals: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };


  // Concept I missed in first try: The only time current will be less than the next value is when we have one of the 9 weird cases, so subtract and add.
  let index = 0;
  while(index < romanNumeral.length) {

    const currentValue = numerals[romanNumeral[index]];
    const nextValue = numerals[romanNumeral[index + 1]];

    if(currentValue < nextValue) {
      numberTotal += nextValue - currentValue;
      index += 2;
    } else {
      numberTotal += currentValue;
      index++;
    }

  }


  return numberTotal;

}
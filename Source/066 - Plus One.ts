/**
 * {@link https://leetcode.com/problems/plus-one/ | Plus One}
 * You are given a **large integer** represented as an integer array `digits`, 
 * where each `digits[i]` is the `ith` digit of the integer. The digits are 
 * ordered from most significant to least significant in left-to-right order. 
 * The large integer does not contain any leading `0`'s.
 * 
 * Increment the large integer by one and return *the resulting array of digits*.
 * 
 * **Constraints**:
 * - `1 \<= digits.length \<= 100`
 * - `0 \<= digits[i] \<= 9`
 * - `digits` does not contain any leading `0`'s.
 */
export type PlusOne = (digits: number[]) => number[];

export function plusOne_Zach(digits: number[]): number[] {
  const incremented = BigInt(digits.join('')) + BigInt(1);
  const finalIntegerArray = Array.from(String(incremented), Number);
  return finalIntegerArray;
}

export function plusOne_Grey(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i] += 1;
      return digits;
    }

    digits[i] = 0;
  }
  
  digits.splice(0, 1, 1, 0);
  return digits;
}
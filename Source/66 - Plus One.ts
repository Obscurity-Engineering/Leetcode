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

// I forgot BigInt! Started failing the later test cases until I added it in
// Jest test file broken?
export function plusOne(digits: number[]): number[] {
  const incremented = BigInt(digits.join('')) + BigInt(1);
  const finalIntegerArray = Array.from(String(incremented), Number); // Had to use .from instead of String split due to TS limiting return type
  return finalIntegerArray;
}
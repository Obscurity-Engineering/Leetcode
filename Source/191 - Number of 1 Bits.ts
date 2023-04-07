/**
 * {@link https://leetcode.com/problems/number-of-1-bits/}
 * 
 * Write a function that takes an unsigned integer and returns the number of '1'
 * 'bits' it has (also known as the Hamming weight).
 * 
 * Constraints:
 * - The input must be a **binary string** of length `32`
 * 
 * @remarks
 * A faster algorithm could be created up using precomputed bitmasks similar to 
 * what we do in mpeg/jpeg calculations. 
 */
export type HammingWeight = (n: number) => number;

export function hammingWeight_Grey(n: number): number {
  return n.toString(2).split('').filter(a => a === '1').length;
}

export function hammingWeight_Zach(n: number): number {
  let returnString = n.toString(2);
  returnString = returnString.replace(/0/g, '');
  return returnString.length;
}
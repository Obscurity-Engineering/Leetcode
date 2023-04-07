/**
 * {@link https://leetcode.com/problems/reverse-bits/}
 * 
 * Reverse bits of a given 32 bits unsigned integer.
 * 
 * Constraints:
 * - The input must be a **binary string** of length `32`
 */
export type ReverseBits = (n: number) => number;

export function reverseBits_Grey(n: number): number {
  return Number.parseInt(
    n
      .toString(2)
      .padStart(32, '0')
      .split('')
      .reverse()
      .join(''), 
    2
  );
}

export function reverseBits_Zach(n: number): number {
  n;
  return 0;
}
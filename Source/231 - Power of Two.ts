/**
 * {@link https://leetcode.com/problems/power-of-two/}
 * 
 * Given an integer `n`, return `true` *if it is a power of two. Otherwise,
 * return `false`*.
 * 
 * An integer `n` is a power of two, if there exists an integer `x` such that
 * `n == 2^x`.
 * 
 * Constraints:
 * - `-2^31 <= n <= 2^31 - 1`
 */
export type IsPowerOfTwo = (n: number) => boolean;

export function isPowerOfTwo_Grey(n: number): boolean {
  return n > 0 && (n | n - 1) === (n + n - 1);
}

export function isPowerOfTwo_Zach(n: number): boolean {
  if(n < 1)
    return false;
  
  let currentValue = n;
  
  while(currentValue % 2 === 0) {
    currentValue /= 2;
  }
  return currentValue === 1; 
}
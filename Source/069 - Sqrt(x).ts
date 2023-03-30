/**
 * {@link https://leetcode.com/problems/sqrtx/ | Sqrt}
 * Given a non-negative integer `x`, return *the square root of `x` rounded 
 * down to the nearest integer.* The returned integer should be **non-negative**
 * as well.
 * 
 * You *must not use* any built-in exponent function or operator.
 * 
 * - For example, do not use `pow(x, 0.5)` in c++ or `x ** 0.5` in python.
 * 
 * Constraints:
 * - `0 <= x <= 2^31 - 1`
 */
export function mySqrt(x: number): number {
  if (x < 2)
    return x;
    
  let guess = x / 2;
  let inverse = x / guess;
  while (guess - inverse > 1) {
    guess = (guess + inverse) / 2;
    inverse = x / guess;
  }

  guess = Math.floor(guess);
  if (guess * guess > x)
    return guess - 1;
  else
    return guess;
}
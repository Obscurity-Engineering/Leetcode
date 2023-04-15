/**
 * {@link https://leetcode.com/problems/ugly-number/}
 * 
 * An **ugly number** is a positive integer whose prime factors are limited to
 * `2`, `3`, and `5`.
 * 
 * Given an integer `n`, return `true` *if `n` is an **ugly number***.
 * 
 * Constraints:
 * - `-2^31 <= n <= 2^31 - 1`
 * @remarks
 * While the name of the functions may imply that we can be ugly, this is simply
 * not the case. We are beautiful.
 */
export type IsUgly = (n: number) => boolean;

export function isUgly_Grey(n: number): boolean {
  const divideIfPossible = (f: number) => 
    n = n % f === 0 ? n / f : n;

  let previous = Infinity;
  while (n < previous) {
    previous = n;
    if (n === 1)
      return true;

    divideIfPossible(2);
    divideIfPossible(3);
    divideIfPossible(5);
  }
  return false;
}

export function isUgly_Zach(n: number): boolean {
  n;
  return false;
}
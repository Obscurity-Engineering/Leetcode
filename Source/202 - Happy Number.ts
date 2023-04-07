/**
 * {@link https://leetcode.com/problems/happy-number/}
 * 
 * Write an algorithm to determine if a number `n` is happy.
 * 
 * A **happy number** is a number defined by the following process:
 * 
 * - Starting with any positive integer, replace the number by the sum of the
 *  squares of its digits.
 * 
 * - Repeat the process until the number equals 1 (where it will stay), or it
 * **loops endlessly in a cycle** which does not include 1.
 * 
 * - Those numbers for which this process **ends in 1** are happy.
 * 
 * Return `true` *if* `n` *is a happy number, and* `false` *if not*.
 * 
 * Constraints:
 * - `1 <= n <= 2^31 - 1`
 */
export type IsHappy = (n: number) => boolean;

export function isHappy_Grey(n: number): boolean {
  n;
  return false;
}

export function isHappy_Zach(n: number): boolean {
  let currentNumber = n;
  const previousNumbers: Set<number> = new Set<number>();

  while (currentNumber !== 1) {
    if (previousNumbers.has(currentNumber))
      return false;

    previousNumbers.add(currentNumber);
    let newNumber = 0;

    for (let digitPlace = 0; digitPlace < currentNumber.toString().length; digitPlace++) {
      newNumber += Math.floor((currentNumber / (10 ** digitPlace)) % 10) ** 2;
    }

    currentNumber = newNumber;
  }

  return true;
}
/**
 * {@link https://leetcode.com/problems/add-digits/}
 * 
 * Given an integer `num`, repeatedly add all its digits until the result has
 * only one digit, and return it.
 * 
 * Constraints:
 * - `0 <= num <= 2^31 - 1`
 */
export type AddDigits = (num: number) => number;

export function addDigits_Grey(num: number): number {
  return ((num - 1) % 9) + 1;
}

export function addDigits_Zach(num: number): number {
  let nextNum = 0;
  let numLength = num.toString().length;
  while(numLength > 0) {
    nextNum += num % 10;
    num = Math.floor(num/10);
    numLength--;
  }

  if(nextNum.toString().length === 1) 
    return nextNum;
  
  return addDigits_Zach(nextNum);
}
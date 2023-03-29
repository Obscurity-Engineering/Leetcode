/**
 * {@link https://leetcode.com/problems/palindrome-number/ | Palindrome Number}
 * 
 * Given an integer `x`, return `true` *if `x` is a palindrome, and `false` 
 * otherwise*.
 * 
 * An integer is a palindrome when it reads the same forward and backward.
 * 
 * For example, `121` is a palindrome while `123` is not.
 * 
 * Constraints:
 * - -2^31 \<= x \<= 2^31 - 1
 */
export function isPalindrome(x: number): boolean {
  const value = x.toString();
  const lengthOfHalfString = Math.floor(value.length / 2);
    
  for (let i = 0; i < lengthOfHalfString; i++) {
    if (value.at(i) !== value.at(-1 - i))
      return false;
  }
    
  return true;
}
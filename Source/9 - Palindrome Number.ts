/**
 * {@link https://leetcode.com/problems/palindrome-number/ | Palindrome Number}
 * 
 * Given an integer `x`, return `true` *if `x` is a palindrome, and `false` otherwise*.
 * 
 * An integer is a palindrome when it reads the same forward and backward.
 * 
 * For example, `121` is a palindrome while `123` is not.
 * 
 * Constraints:
 * - -2^31 \<= x \<= 2^31 - 1
 */

export function isPalindrome(value: number): boolean {
  // Convert to String: O(n) time complexity, O(1) space
  // Don't convert to String: O(n) to separate digits, O(n) to traverse digits, O(n) space to store digits in array for traversal
  const valueString: string = value.toString();

  let leftPointer = 0;
  let rightPointer = valueString.length - 1;

  while(leftPointer < rightPointer) {
    const leftDigit = parseInt(valueString[leftPointer]);
    const rightDigit = parseInt(valueString[rightPointer]);

    if(leftDigit !== rightDigit)
      return false;

    leftPointer++;
    rightPointer--;
  }

  return true;

}
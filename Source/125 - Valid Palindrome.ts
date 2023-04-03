/**
 * {@link https://leetcode.com/problems/valid-palindrome/ | Valid Palindrome}
 * 
 * A phrase is a **palindrome** if, after converting all uppercase letters into
 * lowercase letters and removing all non-alphanumeric characters, it reads the
 * same forwards and backwards. Alphanumeric characters include letters and
 * numbers.
 * 
 * Given a string `s`, return `true` *if `s` is a **palindrome**, or `false`
 * otherwise*.
 * 
 * Constraints:
 * - `1 <= s.length <= 2 * 105`
 * - `s` consists only of printable ASCII characters.
 */
export type IsPalindrome = (s: string) => boolean;

export function isPalindrome_Zach(s: string): boolean {
  const alphanumeric = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

  // Two Pointer Character Comparison
  let left = 0;
  let right = alphanumeric.length - 1;
  while (left < right) {
    if(alphanumeric[left] !== alphanumeric[right])
      return false;
    left++;
    right--;
  }

  return true;
}

export function isPalindrome_Grey(message: string): boolean {
  function isAlphanumeric(charCode: number) {
    return (
      (charCode >= 48 && charCode <= 57) ||
      (charCode >= 65 && charCode <= 90) ||
      (charCode >= 97 && charCode <= 122)
    );
  }

  const strippedMessage = message
    .toLowerCase()
    .split('')
    .map(s => s.charCodeAt(0))
    .filter(isAlphanumeric);

  const length = strippedMessage.length;
  for (let inset = 0; inset < length / 2; inset++) {
    if (strippedMessage[inset] !== strippedMessage[length - inset - 1])
      return false;
  }

  return true;
}
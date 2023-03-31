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
  s;
  return false;
}

export function isPalindrome_Grey(s: string): boolean {
  const [A, a, _0] = [0b1000001, 0b1100001, 0b0011000];
  function at(index: number) {
    const characterCode = s.charCodeAt(index);
    if (characterCode >= A && characterCode < A + 26) {
      return characterCode - 32;
    } else {
      return characterCode;
    }
  }

  const isAlphanumeric = (index: number) =>
    (at(index) >= a && at(index) < a + 26) ||
    (at(index) >= _0 && at(index) < _0 + 10);
  
  const isNotAlphanumericAt = (index: number) => 
    !isAlphanumeric(at(index));

  const window = {
    left: 0,
    right: s.length - 1
  };

  while (window.left < window.right) {
    
    while(isNotAlphanumericAt(window.left)) window.left++;
    while(isNotAlphanumericAt(window.right)) window.right--;
    if (at(window.left) !== at(window.right)) {
      console.log(`${s.at(window.left)} !== ${s.at(window.right)}`);
      return false;
    }

    window.left++;
    window.right++;
  }
  return true;
}
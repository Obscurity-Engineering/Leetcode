/**
 * {@link https://leetcode.com/problems/length-of-last-word/ | Length of Last Word}
 * Given a string `s` consisting of words and spaces, return *the length of the 
 * **last** word in the string.*
 * 
 * A **word** is a maximal substring consisting of non-space characters only.
 * 
 *  **Constraints**:
 * - `1 \<= s.length \<= 10^4`
 * - `s` consists of only English letters and spaces `' '`.
 * - There will be at least one word in `s`.
 */
export function lengthOfLastWord(s: string): number {
<<<<<< Zach-Problems-58-66-67-69-70
  return s.trimEnd().split(' ').slice(-1)[0].length;
======
  /**
   * In production
   * return s.trimEnd().split(' ').slice(-1)[0].length;
   */

  let endIndex = s.length - 1;
  while (s[endIndex] === ' ')
    endIndex -= 1;

  let startIndex = endIndex;
  while(s[startIndex] !== ' ' && startIndex >= 0)
    startIndex -= 1;

  return endIndex - startIndex;
>>>>>> Unified-Problems-58-66-67-69-70
}
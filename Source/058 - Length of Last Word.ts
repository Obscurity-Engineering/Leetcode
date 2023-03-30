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
 * Production code would use:
 * ```ts
 *  return s.trimEnd().split(' ').slice(-1)[0].length;
 * ```
 */
export type LengthOfLastWord = (s: string) => number;

export function lengthOfLastWord_Zach(s: string): number {
  return s.trimEnd().split(' ').slice(-1)[0].length;
}

export function lengthOfLastWord_Grey(s: string): number {
  let endIndex = s.length - 1;
  while (s[endIndex] === ' ')
    endIndex -= 1;

  let startIndex = endIndex;
  while(s[startIndex] !== ' ' && startIndex >= 0)
    startIndex -= 1;

  return endIndex - startIndex;
}
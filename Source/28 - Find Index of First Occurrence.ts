/**
 * {@link https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/ | First Occurrence}
 * 
 * Given two strings `needle` and `haystack`, return the index of the first 
 * occurrence of `needle` in `haystack`, or `-1` if `needle` is not part of 
 * `haystack`.
 * 
 * Constraints:
 * - `1 \<= haystack.length, needle.length \<= 10^4`
 * - `haystack` and `needle` consist of only lowercase English characters.
 */
export function strStr(haystack: string, needle: string): number {
  /**
   * In production code:
   * return haystack.indexOf(needle);
   */

  const needleLength = needle.length;
  for (let i = 0; i <= haystack.length - needleLength; i++) {
    if (haystack.slice(i, i + needleLength) === needle)
      return i;
  }

  return -1;
}
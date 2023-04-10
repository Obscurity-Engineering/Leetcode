/**
 * {@link https://leetcode.com/problems/isomorphic-strings/}
 * 
 * Given two strings `s` and `t`, *determine if they are isomorphic*.
 * 
 * Two strings `s` and `t` are isomorphic if the characters in `s` can be 
 * replaced to get `t`.
 * 
 * All occurrences of a character must be replaced with another character while
 * preserving the order of characters. No two characters may map to the same
 * character, but a character may map to itself.
 * 
 * Constraints:
 * - `1 <= s.length <= 5 * 10^4`
 * - `t.length == s.length`
 * - `s` and `t` consist of any valid ascii character.
 */
export type IsIsomorphic = (s: string, t: string) => boolean;

export function isIsomorphic_Grey(s: string, t: string): boolean {
  s;
  t;
  return false;
}

export function isIsomorphic_Zach(s: string, t: string): boolean {
  if(s.length !== t.length)
    return false;

  // I LOVE PROBLEMS WITH SETS AND MAPS! :)
  const letterMappings = new Map<string, string>();
  const mappedLetters = new Set<string>();

  for(let index = 0; index < s.length; index++) {
    const sChar = s[index];
    const tChar = t[index];

    if(letterMappings.has(sChar)) {
      if(letterMappings.get(sChar) !== tChar)
        return false;
    } else { 
      if(mappedLetters.has(tChar)) {
        return false;
      } else {
        letterMappings.set(sChar, tChar);
        mappedLetters.add(tChar);
      }
    }
  }

  return true;
}
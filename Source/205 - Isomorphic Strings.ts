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
  const sLookup = new Map<string, number>();
  const tLookup = new Map<string, number>();
  let patternIdCounter = 0;

  for (let index = 0; index < s.length; index++) {
    const sCharacter = s.charAt(index);
    const tCharacter = t.charAt(index);
    const sPatternId = sLookup.get(sCharacter);
    const tPatternId = tLookup.get(tCharacter);  
    if (sPatternId !== tPatternId)
      return false;

    if (sPatternId === undefined) {
      patternIdCounter += 1;
      sLookup.set(sCharacter, patternIdCounter);
      tLookup.set(tCharacter, patternIdCounter);
    }
  }

  return true;
}

export function isIsomorphic_Zach(s: string, t: string): boolean {
  s;
  t;
  return false;
}
/**
 * {@link https://leetcode.com/problems/valid-anagram/}
 * 
 * Given two strings `s` and `t`, return `true` *if `t` is an anagram of `s`, 
 * and `false` otherwise*.
 * 
 * An **anagram** is a word or phrase formed by rearranging the letters of a
 * different word or phrase, typically using all the original letters exactly
 * once.
 * 
 * Constraints:
 * - `1 <= s.length, t.length <= 5 * 10^4`
 * - `s` and `t` consist of lowercase English letters.
 */
export type IsAnagram = (s: string, t: string) => boolean;

export function isAnagram_Grey(s: string, t: string): boolean {
  if (s.length !== t.length)
    return false;
      
  const counts = new Map<string, number>();
    
  const sCharacters = s.split('');
  for (const character of sCharacters) {
    const count = counts.get(character) ?? 0;
    counts.set(character, count + 1);
  }
  
  const tCharacters = t.split('');
  for (const character of tCharacters) {
    const count = counts.get(character) ?? 0;
    if (count === 0)
      return false;
    counts.set(character, count - 1);
  }
  
  return true;
}

export function isAnagram_Zach(s: string, t: string): boolean {
  if(s.length !== t.length)
    return false;

  const sFrequencyCounter = new Map<string, number>();
  const tFrequencyCounter = new Map<string, number>();

  for(let index = 0; index < s.length; index++) {
    const sChar = s[index];
    const tChar = t[index];

    const currentSFrequency = sFrequencyCounter.get(sChar) || 0;
    sFrequencyCounter.set(sChar, currentSFrequency + 1);

    const currentTFrequency = tFrequencyCounter.get(tChar) || 0;
    tFrequencyCounter.set(tChar, currentTFrequency + 1);
  }

  for(const character of sFrequencyCounter.keys()) {
    if(sFrequencyCounter.get(character) !== tFrequencyCounter.get(character))
      return false;
  }

  return true;
}
/** 
 * {@link https://leetcode.com/problems/longest-common-prefix/ | Longest Common Prefix}
 * 
 * Write a function to find the longest common prefix string amongst an array of strings.
 * 
 * If there is no common prefix, return an empty string `""`.
 *
 * Constraints:
 * - 0 \<= words.length \<= 200
 * - 0 \<= words[i].length \<= 200
 * - words[i] consists of only lower-case English letters.
 */
export function longestCommonPrefix(words: string[]): string {

  // Compare the character at the same index across all of the strings
  // If we have any mismatch, return the current working prefix immediately

  // Could be any number of strings, so can't hardcode the comparison
  // Need a reusable system that tracks current letter
  // Maybe use a set or a 2nd array to store the current character value

  let commonPrefix = '';
  const firstWord = words[0];

  for(let charIndex = 0; charIndex < firstWord.length; charIndex++) {
    const targetChar = firstWord[charIndex];
    

    for(const word of words) {
      if(word[charIndex] !== targetChar) {
        return commonPrefix;
      }
    }

    commonPrefix = commonPrefix.concat(targetChar);

  }
  



  return commonPrefix;
} 

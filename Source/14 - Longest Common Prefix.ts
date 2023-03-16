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
    
    const baseWord = words.at(0) ?? '';
    
    for (let prefixLength = 1; prefixLength <= baseWord.length; prefixLength++) {
        const prefix = baseWord.slice(0, prefixLength);
        
        const isMissingPrefix = (word: string) => 
        word.slice(0, prefix.length) !== prefix;
        
        if (words.some(isMissingPrefix))
        return baseWord.slice(0, prefixLength - 1);
    }
    
    return baseWord;
}


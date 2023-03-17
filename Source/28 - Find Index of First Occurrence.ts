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

// Inspired by Leetcode solutions, made me facepalm when I saw it
export function strStr(haystack: string, needle: string): number {
  for(let index = 0; index < haystack.length; index++) {
    if(haystack.slice(index, index + needle.length) === needle) return index;
  }

  return -1;
}



// OLD STINKY CODE EW GROSS !
// export function strStr(haystack: string, needle: string): number {

//   // Brute force, nested for loops, if you detect the first character in the pattern iterate up until the length of needle, return original index if loop succeeds
//   // Can use extra DS
//   let firstOccurrence= -1;
//   const pattern: string[] = [];
//   let needleTracker = 0;

//   for(let index = 0; index < haystack.length; index++) {

//     if(haystack[index] === needle[needleTracker]) {
//       firstOccurrence = pattern.length === 0 ? index : firstOccurrence; // Set first occurrence index
//       pattern.push(haystack[index]);
//       needleTracker++;
//       const patternMatched = pattern.length === needle.length;

//       if(patternMatched)
//         return firstOccurrence;

//     } else {
//       pattern.splice(0, pattern.length);
//       needleTracker = 0;
//     }

//     console.log(pattern);
//   }

//   return -1;
// }


/**
 * {@link https://leetcode.com/problems/contains-duplicate/}
 * 
 * Given an integer array `nums`, return `true` if any value appears **at least
 * twice** in the array, and return `false` if every element is distinct.
 * 
 * Constraints:
 * - `1 <= nums.length <= 10^5`
 * - `-10^9 <= nums[i] <= 10^9`
 */
export type ContainsDuplicate = (nums: number[]) => boolean;

export function containsDuplicate_Grey(nums: number[]): boolean {
  nums;
  return false;
}

export function containsDuplicate_Zach(nums: number[]): boolean {
  const visitedNumbers = new Set<number>();

  for(let index = 0; index < nums.length; index++) {
    if(visitedNumbers.has(nums[index]))
      return true;

    visitedNumbers.add(nums[index]);
  }

  return false;
}

// TODO: Talk about the baller solution (Grey probably used it)
/**
 * {@link https://leetcode.com/problems/search-insert-position/ | Search Insert Position}
 * 
 * Given a sorted array of distinct integers and a target value, return the 
 * index if the target is found. If not, return the index where it would be 
 * if it were inserted in order.
 * 
 * You must write an algorithm with `O(log n)` runtime complexity.
 * 
 * Constraints:
 * - `1 \<= nums.length \<= 10^4`
 * - `-10^4 \<= nums[i] \<= 10^4`
 * - `nums` contains **distinct** values sorted in **ascending** order.
 * - `-10^4 \<= target \<= 10^4`
 */
export function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length;

  while (right - left > 1) {
    const comparisonIndex = Math.floor((left + right) / 2);
    const value = nums[comparisonIndex];

    if (value === target)
      return comparisonIndex;
    
    if (value < target)
      left = comparisonIndex;

    if (value > target)
      right = comparisonIndex;
  }

  return nums[left] >= target ? left : right;
}
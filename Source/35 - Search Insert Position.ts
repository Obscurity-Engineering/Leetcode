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
  let right = nums.length - 1;

  while(left <= right) {
    const middle = Math.floor((left + right) / 2);

    if(nums[middle] === target)
      return middle;

    if(nums[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return left; // I implemented everything correctly, but couldn't figure out what to return until I guessed left, so I missed that concept when stepping through examples.

}
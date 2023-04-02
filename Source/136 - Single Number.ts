/**
 * {@link https://leetcode.com/problems/single-number/ | Single Number}
 * 
 * Given a **non-empty** array of integers `nums`, every element appears *twice*
 * except for one. Find that single one.
 * 
 * You must implement a solution with a linear runtime complexity and use only
 * constant extra space.
 * 
 * Constraints:
 * - `1 <= nums.length <= 3 * 104`
 * - `-3 * 104 <= nums[i] <= 3 * 104`
 * - Each element in the array appears twice except for one element which 
 * appears only once.
 */
export type SingleNumber = (nums: number[]) => number;

export function singleNumber_Zach(nums: number[]): number {
  nums;
  return 0;
}

export function singleNumber_Grey(nums: number[]): number {
  return nums.reduce((collector, value) => collector ^ value);
}
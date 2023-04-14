/**
 * {@link https://leetcode.com/problems/summary-ranges/}
 * 
 * You are given a **sorted unique** integer array `nums`.
 * 
 * A **range** `[a, b]` is the set of all integers from `a` to `b` (inclusive).
 * 
 * Return *the smallest sorted list of ranges that cover all the numbers in the
 * array exactly*. That is, each element of `nums` is covered by exactly one of
 * the ranges, and there is no integer `x` such that `x` is in one of the ranges
 * but not in `nums`.
 * 
 * Each range `[a,b]` in the list should be output as:
 * - `"a->b"` if `a != b`
 * - `"a"` if `a == b`
 * 
 * Constraints:
 * - `0 <= nums.length <= 20`
 * - `-2^31 <= nums[i] <= 2^31 - 1`
 * - All the values of `nums` are **unique**.
 * - `nums` is sorted in ascending order.
 */
export type SummaryRanges = (nums: number[]) => string[];

export function summaryRanges_Grey(nums: number[]): string[] {
  nums;
  return [];
}

export function summaryRanges_Zach(nums: number[]): string[] {
  const ranges: string[] = [];

  if(nums.length === 0)
    return ranges;

  let a = nums[0]; 
  let b = nums[0];
  let expectedNumber = a + 1; 

  for(let index = 1; index < nums.length + 1; index++) {
    b = nums[index]; 
    if(b === expectedNumber) {
      expectedNumber = b + 1; 
    } else {
      b = nums[index - 1]; 
      const newRange = a === b ?  a.toString(): 
        a.toString() + '->' + b.toString(); 
      a = nums[index]; 
      expectedNumber = a + 1; 
      ranges.push(newRange);
    }
  }
  return ranges;
}
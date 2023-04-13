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
  if (nums.length === 0)
    return [];

  let [first, last] = [nums[0], nums[0]];
  const ranges = [];

  for (let index = 0; index <= nums.length; index++) {
    const value = nums.at(index) ?? Infinity;
    [first, last] = function() {
      if (value <= last + 1)
        return [first, value];

      if (first === last)
        ranges.push(`${first}`);
      else
        ranges.push(`${first}->${last}`);

      return [value, value];
    }();
  }

  return ranges;
}

export function summaryRanges_Zach(nums: number[]): string[] {
  nums;
  return [];
}
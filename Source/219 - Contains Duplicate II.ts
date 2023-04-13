/**
 * {@link https://leetcode.com/problems/contains-duplicate-ii/}
 * 
 * Given an integer array `nums` and an integer `k`, return `true` if there are
 * two **distinct indices** `i` and `j` in the array such that
 * `nums[i] == nums[j]` and `abs(i - j) <= k`.
 * 
 * Constraints:
 * - `1 <= nums.length <= 10^5`
 * - `-10^9 <= nums[i] <= 10^9`
 * - `0 <= k <= 10^5`
 */
export type ContainsNearbyDuplicate = (nums: number[], k: number) => boolean;

export function containsNearbyDuplicate_Grey(
  nums: number[],
  k: number
): boolean {
  return nums
    .some((value, index) => ([] as number[]) 
      .concat(nums.slice(Math.max(index - k, 0), index))
      .concat(nums.slice(index + 1, index + k + 1))
      .find(element => element === value) !== undefined
    );
}

export function containsNearbyDuplicate_Zach(
  nums: number[],
  k: number
): boolean {
  const visitedNumbers = new Map<number, number>();

  for (let index = 0; index < nums.length; index++) {
    const currentNumber = nums[index];
    if (visitedNumbers.has(currentNumber)) {
      const pastIndex = visitedNumbers.get(currentNumber) ?? 0;
      const distance = Math.abs(index - pastIndex);
      if (distance <= k)
        return true; 
    } 

    visitedNumbers.set(currentNumber, index);
  }

  return false;
}
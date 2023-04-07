/**
 * {@link https://leetcode.com/problems/majority-element/}
 * 
 * Given an array `nums` of size `n`, return *the majority element*.
 * 
 * The majority element is the element that appears more than `⌊n / 2⌋` times. 
 * You may assume that the majority element always exists in the array.
 * 
 * Constraints:
 * - `n == nums.length`
 * - `1 <= n <= 5 * 10^4`
 * - `-2^31 <= nums[i] <= 2^31 - 1`
 */
export type MajorityElement = (nums: number[]) => number;

export function majorityElement_Grey(nums: number[]): number {
  let candidate = nums[0] + 1;
  let candidateStrength = 1;

  nums.forEach(value => {
    candidateStrength += value === candidate ? 1 : -1;

    if (candidateStrength === 0) {
      candidateStrength = 1;
      candidate = value;
    }
  });

  return candidate;
}



export function majorityElement_Zach(nums: number[]): number {
  const frequencyCounter = new Map<number, number>();

  for (let index = 0; index < nums.length; index++) {
    const currentValue = nums[index];
    frequencyCounter.set(currentValue, (frequencyCounter.get(currentValue) ?? 0) + 1);
  }

  for (const [key, value] of frequencyCounter) {
    if (value > nums.length / 2) {
      return key;
    }
  }

  return 0; // Case that never happens

}
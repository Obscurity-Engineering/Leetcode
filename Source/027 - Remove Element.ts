/**
 * {@link https://leetcode.com/problems/remove-element/ | Remove Element}
 * 
 * Given an integer array `nums` and an integer `val`, remove all occurrences of 
 * `val` in `nums` {@link https://en.wikipedia.org/wiki/In-place_algorithm | in-place}. 
 * The relative order of the elements may be changed.
 * 
 * Since it is impossible to change the length of the array in some languages, 
 * you must instead have the result be placed in the **first part** of the array 
 * `nums`. More formally, if there are `k` elements after removing the duplicates, 
 * then the first `k` elements of `nums` should hold the final result. It does not 
 * matter what you leave beyond the first `k` elements.
 * 
 * Return k after placing the final result in the first `k` slots of `nums`.
 * 
 * Do **not** allocate extra space for another array. You must do this by 
 * **modifying the input array in-place** with O(1) extra memory.
 * 
 * Constraints:
 * - `0 \<= nums.length \<= 100`
 * - `0 \<= nums[i] \<= 50`
 * - `0 \<= val \<= 100`
 */
export type RemoveElement = (nums: number[], val: number) => number;

export function removeElement_Zach(nums: number[], val: number): number {
  let keepers = 0;

  for(let index = 0; index < nums.length; index++) {
    
    if(nums[index] !== val) {
      nums[keepers] = nums[index];
      keepers++;
    }  
  }

  return keepers;
}

export function removeElement_Grey(nums: number[], val: number): number {
  let sortedSectionEnd = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[sortedSectionEnd] = nums[i];
      sortedSectionEnd += 1;
    }
  }
  return sortedSectionEnd;
}
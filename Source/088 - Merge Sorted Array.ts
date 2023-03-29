/**
 * {@link https://leetcode.com/problems/merge-sorted-array/ | Merge Sorted Array}
 * You are given two integer arrays `nums1` and `nums2`, sorted in 
 * **non-decreasing order**, and two integers `m` and `n`, representing the 
 * number of elements in `nums1` and `nums2` respectively.
 * 
 * **Merge** `nums1` and `nums2` into a single array sorted in **non-decreasing
 * order**.
 * 
 * The final sorted array should not be returned by the function, but instead
 * be **stored inside the array** `nums1`. To accommodate this, `nums1` has a
 * length of `m + n`, where the first `m` elements denote the elements that
 * should be merged, and the last `n` elements are set to `0` and should be
 * ignored. `nums2` has a length of `n`.
 * 
 * Constraints:
 * - `nums1.length == m + n`
 * - `nums2.length == n`
 * - `0 <= m, n <= 200`
 * - `1 <= m + n <= 200`
 * - `-10^9 <= nums1[i], nums2[j] <= 10^9`
 */
export type Merge = (
  nums1: number[], 
  m: number, 
  nums2: number[], 
  n: number
) => void;

export function merge_Zach(
  nums1: number[], 
  m: number, 
  nums2: number[], 
  n: number
): void {
  let sortedIndex = nums1.length - 1;

  while(m > 0 || n > 0) {
    if(m === 0 || nums1[m - 1] < nums2[n - 1]) {
      nums1[sortedIndex] = nums2[n - 1];
      n--;
    } else {
      nums1[sortedIndex] = nums1[m - 1];
      m--;
    }

    sortedIndex--;
  }
}

export function merge_Grey(nums1: number[], m: number, nums2: number[], n: number): void {
  let unsortedCount1 = m;
  let unsortedCount2 = n;

  while (unsortedCount1 + unsortedCount2 > 0) {
    const insertIndex = unsortedCount1 + unsortedCount2 - 1; 
    const value1 = nums1[unsortedCount1 - 1];
    const value2 = nums2[unsortedCount2 - 1];

    if (unsortedCount2 === 0 || value1 >= value2) {
      nums1[insertIndex] = value1;
      unsortedCount1 -= 1;
    } else {
      nums1[insertIndex] = value2;
      unsortedCount2 -= 1;
    }
  }
}
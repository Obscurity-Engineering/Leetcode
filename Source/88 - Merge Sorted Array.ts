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
export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  
  
  let sortedIndex = nums1.length - 1;
  m--;
  n--;

  while(m > 0 || n > 0) {
    if(nums1[m] < nums2[n]) {
      nums1[sortedIndex] = nums2[n];
      n--;
    } else {
      nums1[sortedIndex] = nums1[m];
      m--;
    }

    sortedIndex--;
  }

  while(n > 0) {
    nums1[sortedIndex] = nums2[n];
    sortedIndex--;
  }

}
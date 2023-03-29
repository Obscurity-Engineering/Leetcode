/**
 * {@link https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/ | Convert Sorted Array to BST}
 * 
 * Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.
 * 
 * Constraints:
 * - 1 \<= nums.length \<= 104
 * - -104 \<= nums[i] \<= 104
 * - nums is sorted in a strictly increasing order.
 */


export function sortedArrayToBST(nums: number[]): TreeNode | null {
  nums;
  return null;
}

// PROVIDED
export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}
// END PROVIDED
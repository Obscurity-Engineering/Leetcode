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

// Not my solution, referenced from online
export function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums.length === 0)
    return null;

  return buildBST(nums, 0, nums.length - 1);
}

function buildBST(nums: number[], start: number, end: number): TreeNode | null {
 
  // Base case, we have processed every number in our left or right subtree
  if(start > end)
    return null;
  
  const middleIndex = Math.floor((start + end) / 2);
  const root = new TreeNode(nums[middleIndex]);

  root.left = buildBST(nums, start, middleIndex - 1);

  root.right = buildBST(nums, middleIndex + 1, end);


  return root;
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
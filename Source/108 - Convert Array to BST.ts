import { OptionalTreeNode, TreeNode } from './common/BinaryTree';

/**
 * {@link https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/ | Convert Sorted Array to BST}
 * 
 * Given an integer array nums where the elements are sorted in ascending order, 
 * convert it to a height-balanced binary search tree.
 * 
 * Constraints:
 * - 1 \<= nums.length \<= 104
 * - -104 \<= nums[i] \<= 104
 * - nums is sorted in a strictly increasing order.
 */
export type SortedArrayToBST = (nums: number[]) => OptionalTreeNode;

export function sortedArrayToBST_Zach(nums: number[]): OptionalTreeNode {
  if (nums.length === 0)
    return null;

  return buildBST(nums, 0, nums.length - 1);
}

function buildBST(nums: number[], start: number, end: number): TreeNode | null {
  if(start > end)
    return null;
  
  const middleIndex = Math.floor((start + end) / 2);

  const root = new TreeNode(nums[middleIndex]);
  root.left = buildBST(nums, start, middleIndex - 1);
  root.right = buildBST(nums, middleIndex + 1, end);

  return root;
}

export function sortedArrayToBST_Grey(nums: number[]): OptionalTreeNode {
  function toBst(left: number, right: number): OptionalTreeNode {
    if (right - left === 0)
      return null;

    const middleIndex = Math.floor((left + right) / 2);

    return new TreeNode(
      nums[middleIndex],
      toBst(left, middleIndex),
      toBst(middleIndex + 1, right)
    );
  }
  return toBst(0, nums.length);
}
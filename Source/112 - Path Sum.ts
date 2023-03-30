import { OptionalTreeNode } from './common/BinaryTree';

/**
 * {@link https://leetcode.com/problems/path-sum/ | Path Sum}
 * 
 * Given the root of a binary tree and an integer targetSum, return true if the 
 * tree has a root-to-leaf path such that adding up all the values along the 
 * path equals targetSum.
 * A leaf is a node with no children.
 * 
 * Constraints:
 * - The number of nodes in the tree is in the range [0, 5000].
 * - -1000 \<= Node.val \<= 1000
 * - -1000 \<= targetSum \<= 1000
 */
export type HasPathSum = (root: OptionalTreeNode, targetSum: number) => boolean;

export function hasPathSum_Zach(
  root: OptionalTreeNode, 
  targetSum: number
): boolean {
  root;
  targetSum;
  return false;
}

export function hasPathSum_Grey(
  root: OptionalTreeNode, 
  targetSum: number
): boolean {
  function hasPathSum(root: OptionalTreeNode, targetSum: number): boolean {
    if (root === null)
      return false;

    const nextSum = targetSum - root.val;

    const { left, right } = root;
    if (left === null && right === null)
      return nextSum === 0;

    return hasPathSum(left, nextSum) || hasPathSum(right, nextSum);
  }
  return hasPathSum(root, targetSum);
}
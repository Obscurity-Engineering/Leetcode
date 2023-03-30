/**
 * {@link https://leetcode.com/problems/path-sum/ | Path Sum}
 * 
 * Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
 * A leaf is a node with no children.
 * 
 * Constraints:
 * - The number of nodes in the tree is in the range [0, 5000].
 * - -1000 \<= Node.val \<= 1000
 * - -1000 \<= targetSum \<= 1000
 */

// Not my own solution, attempted, failed, and found solution online
export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (root === null) 
    return false;
  if(root.left === null && root.right === null) 
    return root.val === targetSum;

  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
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
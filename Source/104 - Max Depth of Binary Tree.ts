/**
 * {@link https://leetcode.com/problems/maximum-depth-of-binary-tree/ | Max Depth of Binary Tree}
 * Given the root of a binary tree, return its maximum depth.
 *
 * A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 * 
 * Constraints:
 * - The number of nodes in the tree is in the range [0, 104].
 * - -100 \<= Node.val \<= 100
 */

export function maxDepth(root: TreeNode | null): number {
  if (root === null)
    return 0;

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
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

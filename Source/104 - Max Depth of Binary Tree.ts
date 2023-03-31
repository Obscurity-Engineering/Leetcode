import { OptionalTreeNode, TreeNode } from './common/BinaryTree';
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
export type MaxDepth = (root: OptionalTreeNode) => number;

export function maxDepth_Zach(root: TreeNode | null): number {
  if (root === null)
    return 0;

  return 1 + Math.max(maxDepth_Zach(root.left), maxDepth_Zach(root.right));
}

export function maxDepth_Grey(root: OptionalTreeNode): number {
  if (root === null)
    return 0;

  return 1 + Math.max(
    maxDepth_Grey(root.left),
    maxDepth_Grey(root.right)
  );
}
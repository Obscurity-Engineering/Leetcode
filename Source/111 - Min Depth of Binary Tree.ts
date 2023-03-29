/**
 * {@link https://leetcode.com/problems/minimum-depth-of-binary-tree/ | Minimum Depth of Binary Tree}
 * 
 * Given a binary tree, find its minimum depth.
 * The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
 * Note: A leaf is a node with no children.
 * 
 * Constraints:
 * - The number of nodes in the tree is in the range [0, 105].
 * - -1000 \<= Node.val \<= 1000
 */

export function minDepth(root: TreeNode | null): number {
  root;
  return -1;
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
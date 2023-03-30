/**
 * {@link https://leetcode.com/problems/balanced-binary-tree/ | Balanced Binary Tree}
 * 
 * Given a binary tree, determine if it is height-balanced
 * 
 * A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.
 * 
 * Constraints:
 * - The number of nodes in the tree is in the range [0, 5000].
 * - -104 \<= Node.val \<= 104
 */

export function isBalanced(root: TreeNode | null): boolean {
  if(root === null)
    return true;

  const leftHeight = maxDepth(root.left);
  const rightHeight = maxDepth(root.right);

   

  return Math.abs(leftHeight - rightHeight) <= 1 && isBalanced(root.left) && isBalanced(root.right); // Need to perform this operation recursively on all nodes in the tree
}

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
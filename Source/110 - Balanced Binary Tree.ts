import { OptionalTreeNode, TreeNode } from './common/BinaryTree';

/**
 * {@link https://leetcode.com/problems/balanced-binary-tree/ | Balanced Binary Tree}
 * 
 * Given a binary tree, determine if it is height-balanced
 * 
 * A height-balanced binary tree is a binary tree in which the depth of the two 
 * subtrees of every node never differs by more than one.
 * 
 * Constraints:
 * - The number of nodes in the tree is in the range [0, 5000].
 * - -104 \<= Node.val \<= 104
 */
export type IsBalanced = (root: OptionalTreeNode) => boolean;

export function isBalanced_Zach(root: OptionalTreeNode): boolean {
  if(root === null)
    return true;

  const leftHeight = maxDepth(root.left);
  const rightHeight = maxDepth(root.right);

  return Math.abs(leftHeight - rightHeight) <= 1 && 
    isBalanced_Zach(root.left) && 
    isBalanced_Zach(root.right);
}

export function maxDepth(root: TreeNode | null): number {
  if (root === null)
    return 0;

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

export function isBalanced_Grey(root: OptionalTreeNode): boolean {
  function isBalanced(root: OptionalTreeNode): [boolean, number] {
    if (root === null)
      return [true, 0];
  
    const [leftIsBalanced, leftHeight] = isBalanced(root.left);
    const [rightIsBalanced, rightHeight] = isBalanced(root.right);
  
    return [
      leftIsBalanced && 
        rightIsBalanced && 
        Math.abs(leftHeight - rightHeight) <= 1,
      Math.max(leftHeight, rightHeight) + 1
    ];
  }
  return isBalanced(root)[0];
}
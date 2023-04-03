import { OptionalTreeNode, TreeNode } from './common/BinaryTree';
/**
 * {@link https://leetcode.com/problems/binary-tree-postorder-traversal/ | Binary Tree Postorder Traversal}
 * 
 * Given the root of a binary tree, return the postorder traversal of its nodes' values.
 * 
 * Constraints:
 * - The number of the nodes in the tree is in the range [0, 100].
 * - -100 \<= Node.val \<= 100
 */
export type PostorderTraversal = (root: OptionalTreeNode) => number[];

export function postorderTraversal_Zach(root: OptionalTreeNode): number[] {
  const traversalValues: number[] = [];
  if (root !== null)
    postorderHelper(root, traversalValues);

  return traversalValues;
}

function postorderHelper(root: TreeNode, traversalValues: number[]): void {

  if (root.left !== null)
    postorderHelper(root.left, traversalValues);

  if (root.right !== null)
    postorderHelper(root.right, traversalValues);

  if (root.val !== null)
    traversalValues.push(root.val);
}

export function postorderTraversal_Grey(root: OptionalTreeNode): number[] {
  root;
  return [];
}
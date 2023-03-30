import { OptionalTreeNode, TreeNode } from './common/BinaryTree';

/**
 * {@link https://leetcode.com/problems/binary-tree-inorder-traversal/ | InOrder Traversal}
 * Given the `root` of a binary tree, return *the inorder traversal of its 
 * nodes' values*.
 * 
 * Constraints:
 * - The number of nodes in the tree is in the range `[0, 100]`.
 * - `-100 <= Node.val <= 100`
 */
export type InorderTraversal = (root: OptionalTreeNode) => number[]

export function inorderTraversal_Zach(root: TreeNode | null): number[] {
  const traversal: number[] = [];

  if(root !== null)
    traverseSubTree(root, traversal);

  return traversal;
}

function traverseSubTree(node: TreeNode, traversal: number[]): void {
  if(node.left !== null)
    traverseSubTree(node.left, traversal);
  
  if(node.val !== null)
    traversal.push(node.val);

  if(node.right !== null)
    traverseSubTree(node.right, traversal);
}

export function inorderTraversal_Grey(root: OptionalTreeNode): number[] {
  if (root === null)
    return [];

  return [
    inorderTraversal_Grey(root.left),
    root.val,
    inorderTraversal_Grey(root.right)
  ].flat();
}
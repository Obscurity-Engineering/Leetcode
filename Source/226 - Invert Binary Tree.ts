import { OptionalTreeNode } from './common/BinaryTree';

/**
 * {@link https://leetcode.com/problems/invert-binary-tree/}
 * 
 * Given the `root` of a binary tree, invert the tree, and return *its root*.
 * 
 * Constraints:
 * - The number of nodes in the tree is in the range `[0, 100]`.
 * - `-100 <= Node.val <= 100`
 */
export type InvertTree = (root: OptionalTreeNode) => OptionalTreeNode;

export function invertTree_Grey(root: OptionalTreeNode): OptionalTreeNode {
  root;
  return null;
}

export function invertTree_Zach(root: OptionalTreeNode): OptionalTreeNode {
  if(root === null)
    return null;
  
  invertHelper(root);

  return root;

}

function invertHelper(root: OptionalTreeNode): void {
  if(root === null)
    return;
  
  if(root.left !== null)
    invertHelper(root.left);
  
  if(root.right !== null)
    invertHelper(root.right);

  const temp = root.left;
  root.left = root.right;
  root.right = temp;  
}
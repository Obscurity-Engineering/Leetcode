import { OptionalTreeNode, TreeNode } from './common/BinaryTree';

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

export function invertTree_Grey_NoMutation(root: OptionalTreeNode): OptionalTreeNode {
  return function invertTree(root: OptionalTreeNode): OptionalTreeNode {
    if (root === null)
      return null;

    return new TreeNode(
      root.val,
      invertTree(root.right),
      invertTree(root.left)
    );
  }(root);
}

export function invertTree_Grey_InPlace(root: OptionalTreeNode): OptionalTreeNode {
  return function invertTree(root: TreeNode | null): TreeNode | null {
    if (root === null)
      return null;

    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);
    return root;
  }(root);
}

export function invertTree_Zach(root: OptionalTreeNode): OptionalTreeNode {
  root;
  return null;
}
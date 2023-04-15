import { OptionalTreeNode } from './common/BinaryTree';

/**
 * {@link https://leetcode.com/problems/binary-tree-paths/}
 * 
 * Give the `root` of a binary tree, return *all root-to-leaf paths in* 
 * ***any order***.
 * 
 * A **leaf** is a node with no children.
 * 
 * Constraints:
 * - The number of nodes in the tree is in the range `[0, 100]`.
 * - `-100 <= Node.val <= 100`
 */
export type BinaryTreePaths = (root: OptionalTreeNode) => string[];

export function binaryTreePaths_Grey(root: OptionalTreeNode): string[] {
  return function traverse(root: OptionalTreeNode): string[] {
    if (root === null)
      return [];

    if (root.left === null && root.right === null)
      return [String(root.val)];

    return [
      ...traverse(root.left).map(path => `${root.val}->${path}`),
      ...traverse(root.right).map(path => `${root.val}->${path}`),
    ];
  }(root);
}

export function binaryTreePaths_Zach(root: OptionalTreeNode): string[] {
  root;
  return [];
}
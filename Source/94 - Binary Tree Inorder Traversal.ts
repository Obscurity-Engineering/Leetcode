/**
 * {@link https://leetcode.com/problems/binary-tree-inorder-traversal/ | InOrder Traversal}
 * Given the `root` of a binary tree, return *the inorder traversal of its 
 * nodes' values*.
 * 
 * Constraints:
 * - The number of nodes in the tree is in the range `[0, 100]`.
 * - `-100 <= Node.val <= 100`
 */
export function inorderTraversal(root: TreeNode | null): number[] {

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

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
  }
}
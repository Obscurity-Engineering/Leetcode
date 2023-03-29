/**
 * {@link https://leetcode.com/problems/symmetric-tree/ | Symmetric Tree}
 * Given the `root` of a binary tree, *check whether it is a mirror of itself*
 * (i.e. symmetric around its center).
 * 
 * Constraints:
 * - The number of nodes in the tree is in the range `[1, 1000]`.
 * - `-100 <= Node.val <= 100`
 */
export function isSymmetric(root: TreeNode | null): boolean {
  if (root === null)
    return true;
  
  return isSymmetricInner(root?.left, root?.right);
}

function isSymmetricInner(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null || q === null)
    return p === q;
  
  return p.val === q.val &&
    isSymmetricInner(p.left, q.right) &&
    isSymmetricInner(p.right, q.left);
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
/**
 * {@link https://leetcode.com/problems/same-tree/ | Same Tree}
 * Given the roots of two binary trees `p` and `q`, write a function to check if
 * they are the same or not.
 * 
 * Two binary trees are considered the same if they are structurally identical,
 * and the nodes have the same value.
 * 
 * Constraints:
 * - The number of nodes in both trees is in the range `[0, 100]`.
 * - `-10^4 <= Node.val <= 10^4`
 */
export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  p;
  q;
  return false;
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
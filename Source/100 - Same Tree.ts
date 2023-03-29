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
export function isSameTree_Zach(p: TreeNode | null, q: TreeNode | null): boolean {
  const treePTraversal: (number | null)[] = [];
  const treeQTraversal: (number | null)[] = [];

  if(p !== null) {
    traverseSubTree(p, treePTraversal);
  }

  if(q !== null) {
    traverseSubTree(q, treeQTraversal);
  }

  return JSON.stringify(treePTraversal) === JSON.stringify(treeQTraversal);

}

function traverseSubTree(node: TreeNode, traversal: (number | null)[]): void {
  traversal.push(node.val);
  
  if(node.left !== null) {
    traverseSubTree(node.left, traversal);
  } else {
    traversal.push(null);
  }

  if(node.right !== null) {
    traverseSubTree(node.right, traversal);
  } else {
    traversal.push(null);
  }
}

export function isSameTree_Grey(p: TreeNode | null, q: TreeNode | null): boolean {  
  if (p === null || q === null)
    return p === q;
  
  return p.val === q.val &&
    isSameTree_Grey(p.left, q.left) &&
    isSameTree_Grey(p.right, q.right);
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
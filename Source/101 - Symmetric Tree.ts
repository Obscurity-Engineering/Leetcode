import { OptionalTreeNode, TreeNode } from './common/BinaryTree';

/**
 * {@link https://leetcode.com/problems/symmetric-tree/ | Symmetric Tree}
 * Given the `root` of a binary tree, *check whether it is a mirror of itself*
 * (i.e. symmetric around its center).
 * 
 * Constraints:
 * - The number of nodes in the tree is in the range `[1, 1000]`.
 * - `-100 <= Node.val <= 100`
 */
export type IsSymmetric = (root: OptionalTreeNode) => boolean

export function isSymmetric_Zach(root: TreeNode | null): boolean {
  if(root === null) {
    return true;
  }

  const deque: (TreeNode | null)[] = [root.left, root.right];
  
  while(deque.length !== 0) {
    const leftNode = deque.shift();
    const rightNode = deque.pop();
    if(!leftNode && !rightNode)
      continue;

    if(!leftNode || !rightNode)
      return false;

    if(leftNode.val !== rightNode.val)
      return false;

    deque.unshift(leftNode.left);
    deque.unshift(leftNode.right);
    deque.push(rightNode.right);
    deque.push(rightNode.left);
  }

  return true;
}

export function isSymmetric_Grey(root: OptionalTreeNode): boolean {
  if (root === null)
    return true;
  
  return isSymmetricInner(root.left, root.right);
}

function isSymmetricInner(left: OptionalTreeNode, right: OptionalTreeNode): boolean {
  if (left === null || right === null)
    return left === right;
  
  return left.val === right.val &&
    isSymmetricInner(left.left, right.right) &&
    isSymmetricInner(left.right, right.left);
}
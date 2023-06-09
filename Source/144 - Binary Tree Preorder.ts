import { OptionalTreeNode, TreeNode } from './common/BinaryTree';
/**
 * {@link https://leetcode.com/problems/binary-tree-preorder-traversal/ | Binary Tree Preorder Traversal}
 * 
 * Given the root of a binary tree, return the preorder traversal of its nodes' values.
 * 
 * Constraints:
 * - The number of nodes in the tree is in the range [0, 100].
 * - -100 \<= Node.val \<= 100
 */
export type PreorderTraversal = (root: OptionalTreeNode) => number[];

export function preorderTraversal_Zach(root: OptionalTreeNode): number[] {
  const traversalValues: number[] = [];
  if(root !== null)
    preorderHelper(root, traversalValues);
  
  return traversalValues;
}

function preorderHelper(root: TreeNode, traversalValues: number[]): void {
  if(root.val !== null)
    traversalValues.push(root.val);

  if(root.left !== null)
    preorderHelper(root.left, traversalValues);

  if(root.right !== null) 
    preorderHelper(root.right, traversalValues); 
}

export function preorderTraversal_Grey(root: OptionalTreeNode): number[] {
  function traverse(root: OptionalTreeNode): number[] {
    if (root === null)
      return [];
    
    return [
      root.val,
      ...traverse(root.left),
      ...traverse(root.right)
    ];
  }

  return traverse(root);
}

// Discuss Morris Traversal
export function preorderTraversal_Grey_NoExtraMem(root: OptionalTreeNode): number[] {
  const values = [] as number[];
  
  function preorderTraverse(current: TreeNode): TreeNode | null {
    const {left, right} = current;

    if (left === null) {
      values.push(current.val);
      return right;
    }

    let inorderPredecessor = left;
    while (
      inorderPredecessor.right !== null && 
      inorderPredecessor.right !== current
    ) {
      inorderPredecessor = inorderPredecessor.right;
    }

    if (inorderPredecessor.right !== current) {
      values.push(current.val);
      inorderPredecessor.right = current;
      return left;
    }

    inorderPredecessor.right = null;
    return right;
  }

  while (root !== null) {
    root = preorderTraverse(root);
  }
  return values;
}
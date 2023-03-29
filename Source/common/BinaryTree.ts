import deepClone from 'deep-clone';

export type OptionalTreeNode = TreeNode | null;

export class TreeNode {
  val: number;
  left: OptionalTreeNode;
  right: OptionalTreeNode;
  constructor(val?: number, left?: OptionalTreeNode, right?: OptionalTreeNode) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
  }
}

export function toBinaryTree(data: (number | null)[]) {
  const dataCopy = deepClone(data);
  balanceTreeWithNulls(dataCopy);
  return toBinaryTreeInner(dataCopy, 0);
}

function balanceTreeWithNulls(data: (number | null)[]): void {
  let depth = 0;
  let startIndex = Math.pow(2, depth) - 1;
  let width = Math.pow(2, depth);
  while (data[startIndex + width] !== undefined) {
    for (let i = startIndex; i < startIndex + width; i++) {
      const value = data[i];
      if (value === null) {
        data.splice(i + width, 0, null, null);
      }
    }

    depth += 1;
    startIndex = Math.pow(2, depth) - 1;
    width = Math.pow(2, depth);
  }
}

function toBinaryTreeInner(
  data: (number | null)[], 
  index: number
): TreeNode | null {
  const value = data[index]; 
  if (value === null || value === undefined) 
    return null;
  
  const depth = Math.floor(Math.log2(index + 1));
  const levelWidth = Math.pow(2, depth);
  const nextLevelOffset = 2 * (index - levelWidth + 1);
  const nextLevelIndex = 2 * levelWidth - 1;
  const childrenIndex = nextLevelIndex + nextLevelOffset;

  return new TreeNode(
    value,
    toBinaryTreeInner(data, childrenIndex),
    toBinaryTreeInner(data, childrenIndex + 1)
  );
}
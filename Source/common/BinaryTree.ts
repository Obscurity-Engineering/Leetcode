
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

/**
 * {@link https://github.com/gaastonsr/treevis/blob/master/tree/treeFromArray.js | Source}
 * @remarks
 * Didn't want to implement it myself.
 */
export function toBinaryTree(data: (number | null)[]) {
  if (data.length === 0)
    return null;

  let nextItem = 0;
  const root = new TreeNode(data[nextItem++] ?? undefined);
  const queue = [root];

  while (queue.length > 0 && nextItem < data.length) {
    const current = queue.shift();
    if (current === undefined)
      throw new Error('Unexpected missing element');

    if (nextItem < data.length) {
      const item = data[nextItem++];

      if (item !== null) {
        const node = new TreeNode(item);
        current.left = node;
        queue.push(node);
      }
    }

    if (nextItem < data.length) {
      const item = data[nextItem++];

      if (item !== null) {
        const node = new TreeNode(item);
        current.right = node;
        queue.push(node);
      }
    }
  }

  return root;
}

export function isBinarySearchTree(root: OptionalTreeNode): boolean {
  const asArray = traverseInOrder(root);
  for (let i = 0; i < asArray.length; i++) {
    if (asArray[i] > asArray[i + 1])
      return false;
  }
  return true;
}

export function isBalanced(root: OptionalTreeNode): boolean {
  const isBalanced = (root: OptionalTreeNode): [boolean, number] => {
    if (root === null)
      return [true, 0];

    const [leftIsBalanced, leftHeight] = isBalanced(root.left);
    const [rightIsBalanced, rightHeight] = isBalanced(root.right);

    return [
      leftIsBalanced && rightIsBalanced && Math.abs(leftHeight - rightHeight) <= 1,
      Math.max(leftHeight, rightHeight) + 1
    ];
  };
  return isBalanced(root)[0];
}

export function traverseInOrder(root: OptionalTreeNode): number[] {
  if (root === null)
    return [];

  return [
    ...traverseInOrder(root.left),
    root.val,
    ...traverseInOrder(root.right)
  ];
}
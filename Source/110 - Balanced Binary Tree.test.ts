import { isBalanced, TreeNode } from './110 - Balanced Binary Tree';

describe('isBalanced', () => {
  test.each([
    [[3,9,20,null,null,15,7], true],
    [[1, 2, 2, 3, 3, null, null, 4, 4], false],
    [[], true],
  ])('%p is balanced === %p', (root, result) => {
    const tree = toTree(root);

    expect(isBalanced(tree)).toEqual(result);
  });
});

function toTree(numbers: (number | null)[]): TreeNode | null {
  const first = numbers[0];
  if (first === undefined || first === null) {
    return null;
  }

  const root = new TreeNode(first);
  const queue: TreeNode[] = [root];
  let index = 1;
  while (index < numbers.length) {
    const current = queue.shift();
    if (current) {
      const leftNodeValue = numbers[index];
      if (leftNodeValue !== null) {
        current.left = new TreeNode(leftNodeValue);
        queue.push(current.left);
      }
      index++;
      const rightNodeValue = numbers[index];
      if (rightNodeValue !== null) {
        current.right = new TreeNode(rightNodeValue);
        queue.push(current.right);
      }
      index++;
    }
  }
  return root;
}
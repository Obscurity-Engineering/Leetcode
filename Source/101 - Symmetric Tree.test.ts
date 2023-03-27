import { isSymmetric, TreeNode } from './101 - Symmetric Tree';

describe('isSymmetric', () => {
  test.each([
    [[1, 2, 2, 3, 4, 4, 3], true],
    [[1, 2, 2, null, 3, null, 3], false],
    [[], true],
  ])('%p is symmetric === %p', (root, rootIsSymmetric) => {
    const tree = toTree(root);

    const result = isSymmetric(tree);

    expect(result).toBe(rootIsSymmetric);
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
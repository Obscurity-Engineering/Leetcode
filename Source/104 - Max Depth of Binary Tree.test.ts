import { maxDepth, TreeNode } from './104 - Max Depth of Binary Tree';

describe('maxDepth', () => {
  test.each([
    [[3, 9, 20, null, null, 15, 7], 3],
    [[1, null, 2], 2],
  ])('The max depth of %p should be %p', (root, depth) => {
    const tree = toTree(root);

    expect(maxDepth(tree)).toBe(depth);
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
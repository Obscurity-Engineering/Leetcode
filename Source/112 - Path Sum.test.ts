import { hasPathSum, TreeNode } from './112 - Path Sum';

describe('hasPathSum', () => {
  test.each([
    [[1,2,3], 5, false],
    [[], 0, false],
  ])('%p has path sum for %p === %p', (root, targetSum, result) => {
    const tree = toTree(root);

    expect(hasPathSum(tree, targetSum)).toEqual(result);
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
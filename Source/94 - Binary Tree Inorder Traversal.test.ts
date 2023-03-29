import { inorderTraversal, TreeNode } from './94 - Binary Tree Inorder Traversal';

describe('inorderTraversal', () => {
  test.each([
    [[1, null, 2, 3], [1, 3, 2]],
    [[], []],
    [[1], [1]],
  ])('Should traverse %p as %p', (root, expected) => {
    const tree = toTree(root);

    const result = inorderTraversal(tree);
    
    expect(result).toEqual(expected);
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
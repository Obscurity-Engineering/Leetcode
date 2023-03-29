import { sortedArrayToBST, TreeNode } from './108 - Convert Array to BST';

describe('sortedArrayToBST', () => {
  test.each([
    [[-10, -3, 0, 5, 9], [0, -3, 9, -10, null, 5]],
    [[1, 3], [3, 1]],
  ])('%p should yield BST == %p', (sortedArray, expected) => {

    const expectedTree = toTree(expected);
    
    expect(sortedArrayToBST(sortedArray)).toEqual(expectedTree);
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
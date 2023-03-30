import { SortedArrayToBST, sortedArrayToBST_Grey, sortedArrayToBST_Zach } from './108 - Convert Array to BST';
import { toBinaryTree } from './common/BinaryTree';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [[-10, -3, 0, 5, 9], [0, -3, 9, -10, null, 5]],
    [[1, 3], [3, 1]],
  ],
  descriptor: '%p should yield BST == %p',
  solutions: [
    ['Zach\'s sortedArrayToBST', sortedArrayToBST_Zach],
    ['Grey\'s sortedArrayToBST', sortedArrayToBST_Grey],
  ],
  tester: (sortedArrayToBST: SortedArrayToBST) =>
    (sortedArray: number[], expected: (number | null)[]) => {
      const expectedTree = toBinaryTree(expected);
      expect(sortedArrayToBST(sortedArray)).toEqual(expectedTree);
    }
});
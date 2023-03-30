import { SortedArrayToBST, sortedArrayToBST_Grey, sortedArrayToBST_Zach } from './108 - Convert Array to BST';
import { isBalanced, isBinarySearchTree, traverseInOrder } from './common/BinaryTree';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [[-10, -3, 0, 5, 9]],
    [[1, 3]],
  ],
  descriptor: '%p should yield BST == %p',
  solutions: [
    ['Zach\'s sortedArrayToBST', sortedArrayToBST_Zach],
    ['Grey\'s sortedArrayToBST', sortedArrayToBST_Grey],
  ],
  tester: (sortedArrayToBST: SortedArrayToBST) =>
    (sortedArray: number[]) => {
      const bst = sortedArrayToBST(sortedArray);

      const isBst = isBinarySearchTree(bst);
      expect(isBst).toBeTruthy();

      const isBalancedTree = isBalanced(bst);
      expect(isBalancedTree).toBeTruthy();

      const backToSortedArray = traverseInOrder(bst);
      expect(backToSortedArray).toEqual(sortedArray);
    }
});
import { IsBalanced, isBalanced_Grey, isBalanced_Zach } from './110 - Balanced Binary Tree';
import { toBinaryTree } from './common/BinaryTree';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [[3, 9, 20, null, null, 15, 7], true],
    [[1, 2, 2, 3, 3, null, null, 4, 4], false],
  ],
  descriptor: 'The tree %p is balanced: %p',
  solutions: [
    ['Zach\'s isBalanced', isBalanced_Zach],
    ['Grey\'s isBalanced', isBalanced_Grey],
  ],
  tester: (isBalanced: IsBalanced) =>
    (root: (number | null)[], balanced: boolean) => {
      const tree = toBinaryTree(root);
      expect(isBalanced(tree)).toBe(balanced);
    }
});
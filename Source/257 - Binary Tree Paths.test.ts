import { BinaryTreePaths, binaryTreePaths_Grey, binaryTreePaths_Zach } from './257 - Binary Tree Paths';
import { toBinaryTree } from './common/BinaryTree';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [[1, 2, 3, null, 5], ['1->2->5', '1->3']],
    [[1], ['1']],
  ],
  descriptor: 'The paths of %p are %p',
  solutions: [
    ['Zach\'s binaryTreePaths', binaryTreePaths_Zach],
    ['Grey\'s binaryTreePaths', binaryTreePaths_Grey],
  ],
  tester: (binaryTreePaths: BinaryTreePaths) =>
    (root: (number | null)[], expected: string[]) => {
      const rootAsTree = toBinaryTree(root);
      expect(binaryTreePaths(rootAsTree).sort()).toEqual(expected.sort());
    }
});
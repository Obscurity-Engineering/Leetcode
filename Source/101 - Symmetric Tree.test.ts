import { IsSymmetric, isSymmetric_Grey, isSymmetric_Zach } from './101 - Symmetric Tree';
import { toBinaryTree } from './common/BinaryTree';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [[1, 2, 2, 3, 4, 4, 3], true],
    [[1, 2, 2, null, 3, null, 3], false],
    [[], true],
  ],
  descriptor: '%p is symmetric === %p',
  solutions: [
    ['Grey\'s isSymmetric', isSymmetric_Grey],
    ['Zach\'s isSymmetric', isSymmetric_Zach],
  ],
  tester: (isSymmetric: IsSymmetric) => 
    (root: (number | null)[], expected: boolean) => {
      const tree = toBinaryTree(root);
      const result = isSymmetric(tree);
      expect(result).toBe(expected);
    }
});
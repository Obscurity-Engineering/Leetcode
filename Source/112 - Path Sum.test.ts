import { HasPathSum, hasPathSum_Grey, hasPathSum_Zach } from './112 - Path Sum';
import { toBinaryTree } from './common/BinaryTree';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [[1,2,3], 5, false],
    [[], 0, false],
  ],
  descriptor: '%p has path sum for %p === %p',
  solutions: [
    ['Zach\'s hasPathSum', hasPathSum_Zach],
    ['Grey\'s hasPathSum', hasPathSum_Grey],
  ],
  tester: (hasPathSum: HasPathSum) =>
    (root: (number | null)[], sum: number, expected: boolean) => {
      const tree = toBinaryTree(root);
      expect(hasPathSum(tree, sum)).toBe(expected);
    }
});
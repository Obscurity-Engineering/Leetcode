import { MaxDepth, maxDepth_Grey, maxDepth_Zach } from './104 - Max Depth of Binary Tree';
import { toBinaryTree } from './common/BinaryTree';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [[3, 9, 20, null, null, 15, 7], 3],
    [[1, null, 2], 2],
  ],
  descriptor: 'The max depth of %p should be %p',
  solutions: [
    ['Zach\'s maxDepth', maxDepth_Zach],
    ['Grey\'s maxDepth', maxDepth_Grey],
  ],
  tester: (maxDepth: MaxDepth) =>
    (root: (number | null)[], depth: number) => {
      const tree = toBinaryTree(root);
      expect(maxDepth(tree)).toBe(depth);
    }
});
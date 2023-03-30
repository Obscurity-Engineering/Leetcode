import { MinDepth, minDepth_Grey, minDepth_Zach } from './111 - Min Depth of Binary Tree';
import { toBinaryTree } from './common/BinaryTree';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [[3, 9, 20, null, null, 15, 7], 2],
    [[2, null, 3, null, 4, null, 5, null, 6], 5],
  ],
  descriptor: '%p should have a minimum depth of %p',
  solutions: [
    ['Zach\'s minDepth', minDepth_Zach],
    ['Grey\'s minDepth', minDepth_Grey],
  ],
  tester: (minDepth: MinDepth) =>
    (root: (number | null)[], depth: number) => {
      const tree = toBinaryTree(root);
      expect(minDepth(tree)).toBe(depth);
    }
});
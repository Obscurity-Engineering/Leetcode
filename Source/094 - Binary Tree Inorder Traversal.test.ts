import { InorderTraversal, inorderTraversal_Grey, inorderTraversal_Zach } from './094 - Binary Tree Inorder Traversal';
import { toBinaryTree } from './common/BinaryTree';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [[1, null, 2, 3], [1, 3, 2]],
    [[], []],
    [[1], [1]],
  ],
  descriptor: 'Should traverse %p as %p',
  solutions: [
    ['Grey\'s inorderTraversal', inorderTraversal_Grey],
    ['Zach\'s inorderTraversal', inorderTraversal_Zach]
  ], 
  tester: (inorderTraversal: InorderTraversal) =>
    (root: (number | null)[], expected: number[]) => {
      const tree = toBinaryTree(root);

      const result = inorderTraversal(tree);
    
      expect(result).toEqual(expected);
    }
});
import { PreorderTraversal, preorderTraversal_Grey, preorderTraversal_Zach } from './144 - Binary Tree Preorder';
import { toBinaryTree } from './common/BinaryTree';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [[1, null, 2, 3], [1,2,3]],
    [[], []],
    [[1], [1]]
  ],
  descriptor: 'Preorder Traversal of %p should yield %p',
  solutions: [
    ['Grey\'s preorderTraversal', preorderTraversal_Grey],
    ['Zach\'s preorderTraversal', preorderTraversal_Zach]
  ],
  tester: (preorderTraversal: PreorderTraversal) =>
    (root: (number | null)[], expected: number[]) => {
      const tree = toBinaryTree(root);

      const result = preorderTraversal(tree);

      expect(result).toEqual(expected);
    }
});
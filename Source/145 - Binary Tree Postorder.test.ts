import { PostorderTraversal, postorderTraversal_Grey, postorderTraversal_Zach } from './145 - Binary Tree Postorder';
import { toBinaryTree } from './common/BinaryTree';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [[1, null, 2, 3], [3, 2, 1]],
    [[], []],
    [[1], [1]]
  ],
  descriptor: 'Postorder Traversal of %p should yield %p',
  solutions: [
    ['Grey\'s postorderTraversal', postorderTraversal_Grey],
    ['Zach\'s postorderTraversal', postorderTraversal_Zach]
  ],
  tester: (postorderTraversal: PostorderTraversal) =>
    (root: (number | null)[], expected: number[]) => {
      const tree = toBinaryTree(root);

      const result = postorderTraversal(tree);

      expect(result).toEqual(expected);
    }
});
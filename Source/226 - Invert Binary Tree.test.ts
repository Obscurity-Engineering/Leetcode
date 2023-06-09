import { InvertTree, invertTree_Grey_InPlace, invertTree_Grey_NoMutation, invertTree_Zach } from './226 - Invert Binary Tree';
import { toBinaryTree } from './common/BinaryTree';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [[4, 2, 7, 1, 3, 6, 9], [4, 7, 2, 9, 6, 3, 1]],
    [[2, 1, 3], [2, 3, 1]],
    [[], []],
  ],
  descriptor: 'The tree %p inverted is %p',
  solutions: [
    ['Zach\'s invertTree', invertTree_Zach],
    ['Grey\'s invertTree in place', invertTree_Grey_InPlace],
    ['Grey\'s invertTree no mutation', invertTree_Grey_NoMutation],
  ],
  tester: (invertTree: InvertTree) =>
    (root: number[], expected: number[]) => {
      const rootAsTree = toBinaryTree(root);
      const expectedAsTree = toBinaryTree(expected);
      expect(invertTree(rootAsTree)).toEqual(expectedAsTree);
    }
});
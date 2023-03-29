import { IsSameTree, isSameTree_Grey, isSameTree_Zach } from './100 - Same Tree';
import { toBinaryTree } from './common/BinaryTree';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [[1, 2, 3], [1, 2, 3], true],
    [[1, 2], [1, null, 2], false],
    [[1, 2, 1], [1, 1, 2], false],
  ],
  descriptor: '%p == %p is %p',
  solutions: [
    ['Grey\'s isSameTree', isSameTree_Grey],
    ['Zach\'s isSameTree', isSameTree_Zach]
  ],
  tester: (isSameTree: IsSameTree) => 
    (p: (number | null)[], q: (number | null)[], expected: boolean) => {
      const pTree = toBinaryTree(p);
      const qTree = toBinaryTree(q);

      const result = isSameTree(pTree, qTree);

      expect(result).toBe(expected);
    }
});
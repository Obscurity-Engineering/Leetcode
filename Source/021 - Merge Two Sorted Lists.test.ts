import { MergeTwoLists, mergeTwoLists_Grey, mergeTwoLists_Zach } from './021 - Merge Two Sorted Lists';
import { toLinkedList } from './common/LinkedList';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [[1, 2, 3], [1, 3, 4], [1, 1, 2, 3, 3, 4]],
    [[], [], []],
    [[], [0], [0]],
  ],
  descriptor: 'Should merge %p and %p into %p',
  solutions: [
    ['Grey\'s mergeTwoLists', mergeTwoLists_Grey],
    ['Zach\'s mergeTwoLists', mergeTwoLists_Zach]
  ],
  tester: (mergeTwoLists: MergeTwoLists) => 
    (arr1: number[], arr2: number[], expected: number[]) => {
      const [list1, list2] = [arr1, arr2].map(toLinkedList);
      const expectedList = toLinkedList(expected);

      const result = mergeTwoLists(list1, list2);

      expect(result).toEqual(expectedList);
    }
});
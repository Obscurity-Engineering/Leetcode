import { ReverseList, reverseList_Grey, reverseList_Zach } from './206 - Reverse Linked List';
import { toLinkedList } from './common/LinkedList';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [[1, 2, 3, 4, 5], [5, 4, 3, 2, 1]],
    [[1, 2], [2, 1]],
    [[], []],
  ],
  descriptor: 'The list %p reversed is %p',
  solutions: [
    ['Zach\'s reverseList', reverseList_Zach],
    ['Grey\'s reverseList', reverseList_Grey],
  ],
  tester: (reverseList: ReverseList) =>
    (head: number[], expected: number[]) => {
      const headAsList = toLinkedList(head);
      const expectedAsList = toLinkedList(expected);
      expect(reverseList(headAsList)).toEqual(expectedAsList);
    }
});
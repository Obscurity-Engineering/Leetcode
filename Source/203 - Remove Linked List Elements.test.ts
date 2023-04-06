import { RemoveElements, removeElements_Grey, removeElements_Zach } from './203 - Remove Linked List Elements';
import { toLinkedList } from './common/LinkedList';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [[1, 2, 6, 3, 4, 5, 6], 6, [1, 2, 3, 4, 5]],
    [[], 1, []],
    [[7, 7, 7, 7], 7, []],
  ],
  descriptor: 'The list %p with value %p removed is %p',
  solutions: [
    ['Zach\'s removeElements', removeElements_Zach],
    ['Grey\'s removeElements', removeElements_Grey],
  ],
  tester: (removeElements: RemoveElements) =>
    (head: number[], val: number, expected: number[]) => {
      const headAsList = toLinkedList(head);
      const expectedAsList = toLinkedList(expected);
      expect(removeElements(headAsList, val)).toEqual(expectedAsList);
    }
});
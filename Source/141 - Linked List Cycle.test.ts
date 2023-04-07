import { HasCycle, hasCycle_Grey, hasCycle_Zach } from './141 - Linked List Cycle';
import { OptionalNode, toLinkedList } from './common/LinkedList';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [[3, 2, 0, -4], 1],
    [[1, 2], 0],
    [[1], -1]
  ],
  descriptor: 'Should identify the cycle in %p at %p',
  solutions: [
    ['Zach\'s hasCycle', hasCycle_Zach],
    ['Grey\'s hasCycle', hasCycle_Grey]
  ],
  tester: (hasCycle: HasCycle) => 
    (list: number[], expected: number) => {
      const head = toLinkedList(list);
      formCycle(head, expected);
      expect(hasCycle(head)).toBe(expected !== -1);
    }
});

function formCycle(head: OptionalNode, expected: number) {
  if (head === null)
    return;

  let tail = head;
  let currentIndex = 0;
  let cycleNode: OptionalNode = null;
  while (tail.next !== null) {
    if (currentIndex === expected)
      cycleNode = tail;

    tail = tail.next;
    currentIndex++;
  }
  
  tail.next = cycleNode;
}
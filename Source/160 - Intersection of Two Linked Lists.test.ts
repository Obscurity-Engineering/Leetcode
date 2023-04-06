import { GetIntersectionNode, getIntersectionNode_Grey, getIntersectionNode_Zach } from './160 - Intersection of Two Linked Lists';
import { OptionalNode, toLinkedList } from './common/LinkedList';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [[4, 1], [5, 6, 1], [8, 4, 5]],
    [[1, 9, 1], [3], [2, 4]],
    [[2, 6, 4], [1, 5], []],
    [[], [2], [3]]
  ],
  descriptor: 'A: %p, B: %p, Intersection: %p',
  solutions: [
    ['Zach\'s getIntersectionNode', getIntersectionNode_Zach],
    ['Grey\'s getIntersectionNode', getIntersectionNode_Grey]
  ],
  tester: (getIntersectionNode: GetIntersectionNode) =>
    (listA: number[], listB: number[], intersection: number[]) => {
      const headA = toLinkedList(listA);
      const headB = toLinkedList(listB);
      const expected = toLinkedList(intersection);
      const [linkedA, linkedB] = formIntersection(headA, headB, expected);
      expect(getIntersectionNode(linkedA, linkedB)).toBe(expected);
    }
});

function formIntersection(
  headA: OptionalNode, 
  headB: OptionalNode, 
  expected: OptionalNode
) {
  if (expected === null)
    return [headA, headB];  

  let tailA = headA ?? expected;
  if (tailA !== expected) {
    while (tailA.next !== null)
      tailA = tailA.next;

    tailA.next = expected;
  }

  let tailB = headB ?? expected;
  if (tailB !== expected) {
    while (tailB.next !== null)
      tailB = tailB.next;

    tailB.next = expected;
  }
  
  return [tailA, tailB];
}
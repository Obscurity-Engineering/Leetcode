import { ListNode, OptionalNode } from './common/LinkedList';

/**
 * {@link https://leetcode.com/problems/reverse-linked-list/}
 * 
 * Given the `head` of a singly linked list, reverse the list, and return *the
 * reversed list*.
 * 
 * Constraints:
 * - The number of nodes in the list is the range `[0, 5000]`.
 * - `-5000 <= Node.val <= 5000`
 */
export type ReverseList = (head: OptionalNode) => OptionalNode;

export function reverseList_Grey(head: OptionalNode): OptionalNode {
  const stack: ListNode[] = [];

  let currentNode = head;
  while (currentNode !== null) {
    stack.push(currentNode);
    currentNode = currentNode.next;
  }

  if (stack.length === 0)
    return null;

  const newHead = stack.pop()!;
  let previousNode = newHead;
  while (stack.length !== 0) {
    const newNode = stack.pop()!;
    previousNode.next = newNode;
    previousNode = newNode;
  }

  previousNode.next = null;

  return newHead;
}

export function reverseList_Zach(head: OptionalNode): OptionalNode {
  head;
  return null;
}
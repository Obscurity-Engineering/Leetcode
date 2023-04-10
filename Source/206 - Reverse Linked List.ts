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
  head;
  return null;
}

export function reverseList_Zach(head: OptionalNode): OptionalNode {
  if (head === null)
    return null;

  const stack: ListNode[] = [];
  let currentNode: OptionalNode = head;

  while(currentNode !== null) {
    const nextNode: OptionalNode = currentNode.next;
    currentNode.next = null;
    stack.push(currentNode);
    currentNode = nextNode;
  }

  let reversedNode: ListNode;
  const newHead = stack.slice(-1)[0];

  while(stack.length > 1) {
    reversedNode = stack.pop() ?? new ListNode();
    reversedNode.next = stack.slice(-1)[0];
  }
  return newHead;
}
import { OptionalNode } from './common/LinkedList';

/**
 * {@link https://leetcode.com/problems/remove-linked-list-elements/}
 * 
 * Given the `head` of a linked list and an integer `val`, remove all the nodes 
 * of the linked list that has `Node.val == val`, and return *the new head*.
 * 
 * Constraints:
 * - The number of nodes in the list is in the range `[0, 10^4]`.
 * - `1 <= Node.val <= 50`
 * - `0 <= val <= 50`
 */
export type RemoveElements = (head: OptionalNode, val: number) => OptionalNode;

export function removeElements_Grey(
  head: OptionalNode,
  val: number
): OptionalNode {
  head;
  val;
  return null;
}

// Need a second opinion: Is this garbage collected properly?
export function removeElements_Zach(
  head: OptionalNode,
  val: number
): OptionalNode {

  if (head === null)
    return null;

  let currentNode: OptionalNode = head;
  let previousNode: OptionalNode = null;
  

  while (currentNode !== null) {
    if (currentNode.val === val) {
      const nextNode: OptionalNode = currentNode.next;
      currentNode.next = null;

      if(previousNode === null) {
        head = nextNode;
      } else {
        previousNode.next = nextNode;
      }

      currentNode = nextNode;
    } else {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  return head;
}
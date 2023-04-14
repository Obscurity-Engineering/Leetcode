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
  if ( head === null)
    return null;

  let currentNode: OptionalNode = head;
  let firstValidNode: OptionalNode = null;

  while (currentNode !== null && currentNode.val === val) {
    currentNode = currentNode.next;
  }

  if (currentNode === null)
    return null;

  firstValidNode = currentNode;
  let previousValidNode = currentNode;

  currentNode = currentNode.next;

  while (currentNode !== null) {
    if (currentNode.val !== val) {
      previousValidNode.next = currentNode;
      previousValidNode = currentNode;
    }
    currentNode = currentNode.next;
  }

  previousValidNode.next = null;
  
  return firstValidNode;
}

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
import { OptionalNode } from './common/LinkedList';

/**
 * {@link https://leetcode.com/problems/linked-list-cycle/ | Linked List Cycle}
 * 
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 * 
 * There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
 * 
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 * 
 * Constraints:
 * - The number of the nodes in the list is in the range [0, 104].
 * - -105 \<= Node.val \<= 105
 * - pos is -1 or a valid index in the linked-list.
 */
export type HasCycle = (head: OptionalNode) => boolean;

export function hasCycle_Zach(head: OptionalNode): boolean {
  if(head === null)
    return false;

  const visitedMap = new Map<OptionalNode, boolean>();
  let currentNode: OptionalNode = head;

  while(currentNode !== null) {
    if(visitedMap.has(currentNode))
      return true;
    
    visitedMap.set(currentNode, true);
    currentNode = currentNode.next;
  }

  return false;
}

export function hasCycle_Grey(head: OptionalNode): boolean {
  let [fastPointer, slowPointer] = [head?.next ?? null, head];
  while (fastPointer !== null && slowPointer !== null) {
    if (fastPointer === slowPointer)
      return true;
    
    fastPointer = fastPointer.next?.next ?? null;
    slowPointer = slowPointer.next;
  }

  return false;
}
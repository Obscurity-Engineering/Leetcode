/**
 * {@link https://leetcode.com/problems/remove-duplicates-from-sorted-list/ | Remove Duplicates}
 * Given the `head` of a sorted linked list, *delete all duplicates such that 
 * each element appears only once*. Return *the linked list **sorted** as well.*
 * 
 * Constraints:
 * - The number of nodes in the list is in the range `[0, 300]`.
 * - `-100 <= Node.val <= 100`
 * - The list is guaranteed to be **sorted** in ascending order.
 */
export function deleteDuplicates_Zach(head: ListNode | null): ListNode | null {

  if (head === null) {
    return null;
  }

  const returnHead: ListNode = new ListNode(head.val, null);
  let currentNode: ListNode | null = head;
  let returnListPointer = returnHead; 
  let currentUniqueValue = returnHead.val; 

  while(currentNode !== null) {
    if(currentNode.val !== currentUniqueValue) {
      currentUniqueValue = currentNode.val;
      const newNode = new ListNode(currentNode.val, null);
      returnListPointer.next = newNode;
      returnListPointer = newNode;
    }

    currentNode = currentNode.next;
  }

  return returnHead;
}

export function deleteDuplicates_Grey(head: ListNode | null): ListNode | null {
  if (head === null)
    return null;

  let currentNode: ListNode | null = head;
  let uniqueValueNode = head;
  while (currentNode !== null) {
    if (currentNode.val !== uniqueValueNode.val) {
      uniqueValueNode.next = currentNode;
      uniqueValueNode = currentNode;
    }
    
    currentNode = currentNode.next;
  }

  uniqueValueNode.next = null;
  return head;
}

// Provided
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
  }
}
// END Provided
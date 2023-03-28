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
export function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }

  const returnHead: ListNode = new ListNode(head.val, null);
  let returnPointer = returnHead; 
  let currentValue = returnHead.val; 

  while(head !== null) {
    if(head.val !== currentValue) {
      currentValue = head.val;
      const newNode = new ListNode(head.val, null);
      returnPointer.next = newNode;
      returnPointer = newNode;
    }

    head = head.next;
  }

  return returnHead;
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
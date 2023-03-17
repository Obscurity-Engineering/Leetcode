/**
 * {@link https://leetcode.com/problems/merge-two-sorted-lists/ | Merge Two Sorted Lists}
 * 
 * You are given the heads of two sorted linked lists `list1` and `list2`.
 * 
 * Merge the two lists in a one **sorted** list. The list should be made by splicing together the nodes of the first two lists.
 * 
 * Return *the head of the merged linked list.*
 * 
 * Constraints:
 * - The number of nodes in both lists is in the range `[0, 50]`.
 * - `-100 \<= Node.val \<= 100`
 * - Both `list1` and `list2` are sorted in *non-decreasing* order.
*/
export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const headNode = new ListNode();
  let sortedListPointer = headNode;

  while(list1 || list2) {

    if(!list1) {
      sortedListPointer.next = list2;
      return headNode.next;
    }

    if(!list2) {
      sortedListPointer.next = list1;
      return headNode.next;
    }

    if(list1.val > list2.val) {
      sortedListPointer.next = list2;
      list2 = list2.next;
    } else {
      sortedListPointer.next = list1;
      list1 = list1.next;
    }

    sortedListPointer = sortedListPointer.next;
  }
  
  return headNode.next;
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
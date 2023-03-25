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
export function mergeTwoLists(list1: OptionalNode, list2: OptionalNode): OptionalNode {
  if (list1 === null || list2 === null)
    return list1 ?? list2;

  let resultHead: OptionalNode;
  let resultTail: OptionalNode;
  let head1: OptionalNode;
  let head2: OptionalNode;

  head1 = list1;
  head2 = list2;
  if (list1.val <= list2.val) {
    resultHead = list1;
    head1 = list1.next;
  } else {
    resultHead = list2;
    head2 = list2.next;
  }
  resultTail = resultHead;

  for (;;) {
    if (head1 === null || head2 === null) {
      resultTail.next = head1 ?? head2;
      return resultHead;
    }

    if (head1.val <= head2.val) {
      resultTail.next = head1;
      head1 = head1.next;
    } else {
      resultTail.next = head2;
      head2 = head2.next;
    }

    resultTail = resultTail.next;
  }
}

type OptionalNode = ListNode | null;

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
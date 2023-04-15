import { OptionalNode } from './common/LinkedList';

/**
 * {@link https://leetcode.com/problems/palindrome-linked-list/}
 * 
 * Given the `head` of a singly linked list, return `true` *if it is a 
 * palindrome*.
 * 
 * Constraints:
 * - The number of nodes in the list is in the range `[1, 10^5]`.
 * - `0 <= Node.val <= 9`
 * @remarks
 * The O(1) memory version is possible without mutation, but it's just a matter
 * of reversing the nodes next pointer again. I'd, Grey, don't want to.
 */
export type IsPalindrome = (head: OptionalNode) => boolean;

export function isPalindrome_Grey(head: OptionalNode): boolean {
  if (head === null || head.next === null)
    return true;
  
  const stack = [] as number[];
  let currentNode = head as OptionalNode;
  let endNode = currentNode;
  while (currentNode !== null) {
    if (endNode === null && stack.pop() !== currentNode.val)
      return false;

    endNode = endNode?.next ?? null;
    if (endNode !== null)
      stack.push(currentNode.val);
    
    endNode = endNode?.next ?? null;
    currentNode = currentNode?.next ?? null;
  }

  return stack.length === 0;
}

export function isPalindrome_Grey_NoMemory(head: OptionalNode): boolean {
  if (head === null || head.next === null)
    return true;
    
  let [leftHalf, rightHalf]: OptionalNode[] = function() {
    let leftHalf = head;
    let endNode = head.next.next;
    let previousNode = null as OptionalNode;
    for (;;) {
      const rightHalf = leftHalf.next!;

      if (endNode === null || endNode.next === null)
        leftHalf.next = previousNode;

      if (endNode === null)
        return [leftHalf, rightHalf];
      endNode = endNode.next;

      if (endNode === null)
        return [leftHalf, rightHalf.next];
      endNode = endNode.next;

      const nextNode = rightHalf;
      leftHalf.next = previousNode;
      previousNode = leftHalf;
      leftHalf = nextNode;
    }
  }();
  
  while (leftHalf !== null && rightHalf !== null) {
    if (leftHalf.val !== rightHalf.val)
      return false;
    
    leftHalf = leftHalf.next;
    rightHalf = rightHalf.next;
  }

  return true;
}

export function isPalindrome_Zach(head: OptionalNode): boolean {
  head;
  return false;
}
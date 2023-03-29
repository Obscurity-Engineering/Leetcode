export type OptionalNode = ListNode | null;

export class ListNode {
  val: number;
  next: OptionalNode;
  constructor(val?: number, next?: OptionalNode) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
  }
}

export function toLinkedList(numbers: number[]): OptionalNode {
  if (numbers.length === 0) 
    return null;

  const head = new ListNode(numbers[0]);
  let current = head;
  for (let i = 1; i < numbers.length; i++) {
    current.next = new ListNode(numbers[i]);
    current = current.next;
  }
  return head;
}
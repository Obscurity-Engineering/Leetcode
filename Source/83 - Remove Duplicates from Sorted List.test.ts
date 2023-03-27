import { deleteDuplicates, ListNode } from './83 - Remove Duplicates from Sorted List';

describe('deleteDuplicates', () => {
  it.each([
    [[1, 1, 2], [1, 2]],
    [[1, 1, 2, 3, 3], [1, 2, 3]],
  ])('Should reduce %p to %p', (unfiltered, expected) => {
    const expectedList = toLinkedList(expected);

    const result = deleteDuplicates(toLinkedList(unfiltered));

    expect(result).toEqual(expectedList);
  });
});

function toLinkedList(numbers: number[]): ListNode | null {
  if (numbers.length === 0) {
    return null;
  }

  const head = new ListNode(numbers[0]);
  let current = head;
  for (let i = 1; i < numbers.length; i++) {
    current.next = new ListNode(numbers[i]);
    current = current.next;
  }
  return head;
}
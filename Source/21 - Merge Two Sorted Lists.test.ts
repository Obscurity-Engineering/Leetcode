import { ListNode, mergeTwoLists } from './21 - Merge Two Sorted Lists';

describe('mergeTwoLists', () => {
  it.each([
    [[1, 2, 4], [1, 3, 4], [1, 1, 2, 3, 4, 4]],
    [null, null, null],
    [null, [0], [0]],
  ])('Should merge %p and %p into %p', (arr1, arr2, expected) => {
    const [list1, list2] = [arr1, arr2].map(toLinkedList);
    const expectedList = toLinkedList(expected);

    const result = mergeTwoLists(list1, list2);

    expect(result).toEqual(expectedList);
  });
});

function toLinkedList(numbers: number[] | null): ListNode | null {
  if (numbers === null)
    return null;

  const head = new ListNode(numbers[0]);
  let current = head;
  for (let i = 1; i < numbers.length; i++) {
    current.next = new ListNode(numbers[i]);
    current = current.next;
  }
  return head;
}
import { IsPalindrome, isPalindrome_Grey, isPalindrome_Zach } from './234 - Palindrome Linked List';
import { toLinkedList } from './common/LinkedList';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [[1, 2, 2, 1], true],
    [[1, 2], false],
  ],
  descriptor: 'The list %p is a palindrome: %p',
  solutions: [
    ['Zach\'s isPalindrome', isPalindrome_Zach],
    ['Grey\'s isPalindrome', isPalindrome_Grey],
  ],
  tester: (isPalindrome: IsPalindrome) =>
    (head: number[], expected: boolean) => {
      const headAsList = toLinkedList(head);
      expect(isPalindrome(headAsList)).toEqual(expected);
    }
});
import { IsPalindrome, isPalindrome_Grey, isPalindrome_Grey_NoMemory, isPalindrome_Zach } from './234 - Palindrome Linked List';
import { toLinkedList } from './common/LinkedList';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [[1, 2, 3, 4, 5], false],
    [[1, 2, 4, 2, 1], true],
    [[1, 2, 2, 1], true],
    [[1, 2], false],
    [[0, 0], true],
    [[1, 0, 1], true],
    [[1], true],
    [[1, 1, 2, 1], false]
  ],
  descriptor: 'The list %p is a palindrome: %p',
  solutions: [
    ['Zach\'s isPalindrome', isPalindrome_Zach],
    ['Grey\'s isPalindrome', isPalindrome_Grey],
    ['Grey\'s isPalindrome without memory', isPalindrome_Grey_NoMemory],
  ],
  tester: (isPalindrome: IsPalindrome) =>
    (head: number[], expected: boolean) => {
      const headAsList = toLinkedList(head);
      expect(isPalindrome(headAsList)).toEqual(expected);
    }
});
//   ||
//  1234 321
// ||
//  12344321

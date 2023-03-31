import { IsPalindrome, isPalindrome_Grey } from './125 - Valid Palindrome';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    ['A man, a plan, a canal: Panama', true],
    ['race a car', false],
    [' ', true],
  ],
  descriptor: 'The string %p is a palindrome: %p',
  solutions: [
    // ['Zach\'s isPalindrome', isPalindrome_Zach ],
    ['Grey\'s isPalindrome', isPalindrome_Grey ],
  ],
  tester: (isPalindrome: IsPalindrome) =>
    (s: string, expected: boolean) => {
      const actual = isPalindrome(s);
      expect(actual).toEqual(expected);
    }
});
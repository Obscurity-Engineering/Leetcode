import { isPalindrome } from './9 - Palindrome Number';

describe('isPalindrome', () => {
  test.each([
    [121, true],
    [-121, false],
    [10, false]
  ])('Should say %p is palindrome as %p', (value, output) => {
    expect(isPalindrome(value)).toBe(output);
  });
});
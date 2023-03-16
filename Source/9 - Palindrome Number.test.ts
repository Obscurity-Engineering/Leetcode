import { isPalindrome } from './9 - Palindrome Number';

describe('isPalindrome', () => {
  test.each([
    [121, true],
    [-121, false],
    [10, false],
    [12466421, true],
    [912321, false],
    [123219, false],
    [123210, false],
    [1, true],
    [9, true]
  ])('Should isPalindrome %p should be %p', (value, output) => {
    expect(isPalindrome(value)).toBe(output);
  });
});
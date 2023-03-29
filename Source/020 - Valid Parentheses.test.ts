import { isValid } from './020 - Valid Parentheses';

describe('isValid', () => {
  test.each([
    ['()', true],
    ['()[]{}', true],
    ['(]', false],
    ['([()]{})', true],
    ['({)}', false]
  ])('Should check %p and expect isValid to be %p', (words, prefix) => {
    expect(isValid(words)).toBe(prefix);
  });
});
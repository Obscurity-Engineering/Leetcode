import { longestCommonPrefix } from './14 - Longest Common Prefix';

describe('longestCommonPrefix', () => {
  test.each([
    [['flower', 'flow', 'flight'], 'fl'],
    [['dog', 'racecar', 'car'], ''],
    [['ab', 'a'], 'a'],
    [['house'], 'house'],
  ])('Should find in %p the common prefix %p', (words, prefix) => {
    expect(longestCommonPrefix(words)).toBe(prefix);
  });
});
import { strStr } from './28 - Find Index of First Occurrence';

describe('strStr', () => {
  test.each([
    ['sadbutsad', 'sad', 0],
    ['leetcode', 'leeto', -1],
    ['helloworld', 'world', 5], // Custom test
    ['mississippi', 'issip', 4] // Leetcode test case I failed initially
  ])(
    'In %p, the first occurrence of %p should start at index %p', 
    (haystack, needle, output) => {
      expect(strStr(haystack, needle)).toBe(output);
    });
});
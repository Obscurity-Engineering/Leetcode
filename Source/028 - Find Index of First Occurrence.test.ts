import { strStr } from './028 - Find Index of First Occurrence';

describe('strStr', () => {
  test.each([
    ['sadbutsad', 'sad', 0],
    ['leetcode', 'leeto', -1],
    ['helloworld', 'world', 5],
    ['mississippi', 'issip', 4]
  ])(
    'In %p, the first occurrence of %p should start at index %p', 
    (haystack, needle, output) => {
      expect(strStr(haystack, needle)).toBe(output);
    });
});
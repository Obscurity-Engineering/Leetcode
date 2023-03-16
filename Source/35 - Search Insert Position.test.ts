import { searchInsert } from './35 - Search Insert Position';

describe('searchInsert', () => {
  test.each([
    [[1, 3, 5, 6], 5, 2],
    [[1, 3, 5, 6], 2, 1],
    [[1, 3, 5, 6], 7, 4],
  ])(
    'In %p, the value %p should exist (or be inserted) at index %p', 
    (numbers, target, output) => {
      expect(searchInsert(numbers, target)).toBe(output);
    });
});
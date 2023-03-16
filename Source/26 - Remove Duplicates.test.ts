import { removeDuplicates } from './26 - Remove Duplicates';

describe('removeDuplicates', () => {
  test.each([
    [[1, 1, 2], [1, 2]],
    [[0, 0, 1, 1, 1, 2, 2, 3, 3, 4], [0, 1, 2, 3, 4]],
    [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1]],
  ])('Should remove duplicates from %p into %p', (nums, expected) => {
    const result = removeDuplicates(nums);
    expect(nums.slice(0, result)).toEqual(expected);
  });
});
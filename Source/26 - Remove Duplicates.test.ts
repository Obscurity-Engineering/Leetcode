import { removeDuplicates_Grey, removeDuplicates_Zach } from './26 - Remove Duplicates';

describe('removeDuplicates', () => {
  test.each([
    [[1, 1, 2], [1, 2]],
    [[0, 0, 1, 1, 1, 2, 2, 3, 3, 4], [0, 1, 2, 3, 4]],
    [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1]],
  ])('Should remove duplicates from %p into %p', (nums, expected) => {
    const result_zach = removeDuplicates_Zach(nums);
    const result_grey = removeDuplicates_Grey(nums);
    expect(nums.slice(0, result_zach)).toEqual(expected);
    expect(nums.slice(0, result_grey)).toEqual(expected);
  });
});
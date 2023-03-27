import { merge } from './88 - Merge Sorted Array';

describe('merge', () => {
  test.each([
    [[1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3, [1, 2, 2, 3, 5, 6]],
    [[1], 1, [], 0, [1]],
    [[0], 0, [1], 1, [1]],
  ])('Should merge %p (%p) and %p (%p) to %p', (nums1, m, nums2, n, expected) => {
    merge(nums1, m, nums2, n);
    expect(nums1).toEqual(expected);
  });
});
import { Merge, merge_Grey, merge_Zach } from './088 - Merge Sorted Array';
import { testSolutions } from './common/Test';

type TestCase = [number[], number, number[], number, number[]];

testSolutions({
  cases: <TestCase[]>[
    [[1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3, [1, 2, 2, 3, 5, 6]],
    [[1], 1, [], 0, [1]],
    [[0], 0, [1], 1, [1]],
  ],
  descriptor: 'Should merge %p (%p) and %p (%p) to %p',
  solutions: [
    ['Grey\'s merge', merge_Grey],
    ['Zach\'s merge', merge_Zach]
  ],
  tester: (merge: Merge) =>
    (nums1, m, nums2, n, expected) => {
      merge(nums1, m, nums2, n);
      expect(nums1).toEqual(expected);
    }
});
import { SearchInsert, searchInsert_Grey, searchInsert_Zach } from './035 - Search Insert Position';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [[1, 3, 5, 6], 5, 2],
    [[1, 3, 5, 6], 2, 1],
    [[1, 3, 5, 6], 7, 4],
    [[1, 3, 5, 6], 0, 0],
    [[1, 2, 3, 5, 6, 8, 11, 13, 15, 16, 17], 0, 0],
    [[1], 1, 0]
  ],
  descriptor: 'In %p, the value %p should exist (or be inserted) at index %p',
  solutions: [
    ['Grey\'s searchInsert', searchInsert_Grey],
    ['Zach\'s searchInsert', searchInsert_Zach],
  ],
  tester: (searchInsert: SearchInsert) => 
    (nums: number[], target: number, expected: number) => {
      expect(searchInsert(nums, target)).toBe(expected);
    }
});
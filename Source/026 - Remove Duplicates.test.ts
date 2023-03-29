import { RemoveDuplicates, removeDuplicates_Grey, removeDuplicates_Zach } from './026 - Remove Duplicates';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [[1, 1, 2], [1, 2]],
    [[0, 0, 1, 1, 1, 2, 2, 3, 3, 4], [0, 1, 2, 3, 4]],
    [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1]],
  ],
  descriptor: 'Should remove duplicates from %p into %p',
  solutions: [
    ['Grey\'s removeDuplicates', removeDuplicates_Grey],
    ['Zach\'s removeDuplicates', removeDuplicates_Zach]
  ],
  tester: (removeDuplicates: RemoveDuplicates) => 
    (nums: number[], expected: number[]) => {
      const result = removeDuplicates(nums);
      expect(nums.slice(0, result)).toEqual(expected);
    }
});
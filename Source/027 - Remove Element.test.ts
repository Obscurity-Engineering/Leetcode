import { RemoveElement, removeElement_Grey, removeElement_Zach } from './027 - Remove Element';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [[3, 2, 2, 3], 3, [2, 2]],
    [[0, 1, 2, 2, 3, 0, 4, 2], 2, [0, 1, 4, 0, 3]],
  ],
  descriptor: 'Should remove %p from %p into %p',
  solutions: [
    ['Grey\'s removeElement', removeElement_Grey],
    ['Zach\'s removeElement', removeElement_Zach],
  ],
  tester: (removeElement: RemoveElement) =>
    (nums: number[], val: number, expected: number[]) => {
      const result = removeElement(nums, val);
      const newArray = nums.slice(0, result);
      newArray.sort();
      expected.sort();
      expect(newArray).toEqual(expected);
    }
});
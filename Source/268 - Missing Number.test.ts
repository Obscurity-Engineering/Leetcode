import { MissingNumber, missingNumber_Grey, missingNumber_Zach } from './268 - Missing Number';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [[3, 0, 1], 2],
    [[0, 1], 2],
    [[9, 6, 4, 2, 3, 5, 7, 0, 1], 8],
  ],
  descriptor: 'The missing number in %p is %p',
  solutions: [
    ['Zach\'s missingNumber', missingNumber_Zach],
    ['Grey\'s missingNumber', missingNumber_Grey],
  ],
  tester: (missingNumber: MissingNumber) =>
    (nums: number[], expected: number) => {
      expect(missingNumber(nums)).toEqual(expected);
    }
});
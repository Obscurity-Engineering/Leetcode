import { SingleNumber, singleNumber_Grey, singleNumber_Zach } from './136 - Single Number';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [[2, 2, 1], 1],
    [[4, 1, 2, 1, 2], 4],
    [[1], 1],
  ],
  descriptor: 'The single number in %p is %p',
  solutions: [
    ['Zach\'s singleNumber', singleNumber_Zach ],
    ['Grey\'s singleNumber', singleNumber_Grey ],
  ],
  tester: (singleNumber: SingleNumber) =>
    (nums: number[], expected: number) => {
      const actual = singleNumber(nums);
      expect(actual).toEqual(expected);
    }
});
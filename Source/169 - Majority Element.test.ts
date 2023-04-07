import { MajorityElement, majorityElement_Grey, majorityElement_Zach } from './169 - Majority Element';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [[3, 2, 3], 3],
    [[2, 2, 1, 1, 1, 2, 2], 2],
    [[6, 5, 5], 5],
    [[8, 8, 7, 7, 7], 7],
    [[2, 2, 1, 3, 1, 1, 4, 1, 1, 5, 1, 1, 6], 1]
  ],
  descriptor: 'The majority element of %p is %p',
  solutions: [
    ['Zach\'s majorityElement', majorityElement_Zach ],
    ['Grey\'s majorityElement', majorityElement_Grey]
  ],
  tester: (majorityElement: MajorityElement) =>
    (nums: number[], expected: number) => {
      expect(majorityElement(nums)).toEqual(expected);
    }
});
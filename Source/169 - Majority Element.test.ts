import { MajorityElement, majorityElement_Grey, majorityElement_Zach } from './169 - Majority Element';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [[3, 2, 3], 3],
    [[2, 2, 1, 1, 1, 2, 2], 2]
  ],
  descriptor: 'The majority element of %p is %p',
  solutions: [
    ['Zach\'s majorityElement', majorityElement_Zach ],
    ['Grey\'s majorityElement', majorityElement_Grey ],
  ],
  tester: (majorityElement: MajorityElement) =>
    (nums: number[], expected: number) => {
      expect(majorityElement(nums)).toEqual(expected);
    }
});
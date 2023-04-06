import { ContainsDuplicate, containsDuplicate_Grey, containsDuplicate_Zach } from './217 - Contains Duplicate';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [[1, 2, 3, 1], true],
    [[1, 2, 3, 4], false],
    [[1, 1, 1, 3, 3, 4, 3, 2, 4, 2], true],
  ],
  descriptor: 'The array %p contains duplicates: %p',
  solutions: [
    ['Zach\'s containsDuplicate', containsDuplicate_Zach ],
    ['Grey\'s containsDuplicate', containsDuplicate_Grey ],
  ],
  tester: (containsDuplicate: ContainsDuplicate) =>
    (nums: number[], expected: boolean) => {
      expect(containsDuplicate(nums)).toEqual(expected);
    }
});
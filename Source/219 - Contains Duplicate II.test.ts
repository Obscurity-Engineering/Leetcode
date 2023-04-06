import { ContainsNearbyDuplicate, containsNearbyDuplicate_Grey, containsNearbyDuplicate_Zach } from './219 - Contains Duplicate II';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [[1, 2, 3, 1], 3, true],
    [[1, 0, 1, 1], 1, true],
    [[1, 2, 3, 1, 2, 3], 2, false],
  ],
  descriptor: 'The array %p contains duplicates within %p indices: %p',
  solutions: [
    ['Zach\'s containsNearbyDuplicate', containsNearbyDuplicate_Zach ],
    ['Grey\'s containsNearbyDuplicate', containsNearbyDuplicate_Grey ],
  ],
  tester: (containsNearbyDuplicate: ContainsNearbyDuplicate) =>
    (nums: number[], k: number, expected: boolean) => {
      expect(containsNearbyDuplicate(nums, k)).toEqual(expected);
    }
});
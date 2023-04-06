import { FirstBadVersion, firstBadVersion_Grey, firstBadVersion_Zach } from './278 - First Bad Version';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [5, 4],
    [1, 1],
  ],
  descriptor: 'The bad version in %p is %p',
  solutions: [
    ['Zach\'s firstBadVersion', firstBadVersion_Zach],
    ['Grey\'s firstBadVersion', firstBadVersion_Grey],
  ],
  tester: (firstBadVersion: FirstBadVersion) =>
    (n: number, expected: number) => {
      expect(firstBadVersion(v => v === expected)(n)).toEqual(expected);
    }
});

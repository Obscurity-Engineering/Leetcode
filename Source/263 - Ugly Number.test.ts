import { IsUgly, isUgly_Grey, isUgly_Zach } from './263 - Ugly Number';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [6, true],
    [1, true],
    [14, false]
  ],
  descriptor: 'The number %p is an ugly number: %p',
  solutions: [
    ['Zach\'s isUgly', isUgly_Zach],
    ['Grey\'s isUgly', isUgly_Grey],
  ],
  tester: (isUgly: IsUgly) =>
    (n: number, expected: boolean) => {
      expect(isUgly(n)).toEqual(expected);
    }
});
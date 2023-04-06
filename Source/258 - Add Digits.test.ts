import { AddDigits, addDigits_Grey, addDigits_Zach } from './258 - Add Digits';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [38, 2],
    [0, 0],
  ],
  descriptor: 'The final sum of digits of %p is %p',
  solutions: [
    ['Zach\'s addDigits', addDigits_Zach],
    ['Grey\'s addDigits', addDigits_Grey],
  ],
  tester: (addDigits: AddDigits) =>
    (num: number, expected: number) => {
      expect(addDigits(num)).toEqual(expected);
    }
});
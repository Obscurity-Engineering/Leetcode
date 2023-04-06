import { IsHappy, isHappy_Grey, isHappy_Zach } from './202 - Happy Number';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [19, true],
    [2, false],
  ],
  descriptor: 'The number %p is happy: %p',
  solutions: [
    ['Zach\'s isHappy', isHappy_Zach ],
    ['Grey\'s isHappy', isHappy_Grey ],
  ],
  tester: (isHappy: IsHappy) =>
    (n: number, expected: boolean) => {
      expect(isHappy(n)).toEqual(expected);
    }
});
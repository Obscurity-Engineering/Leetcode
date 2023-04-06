import { IsPowerOfTwo, isPowerOfTwo_Grey, isPowerOfTwo_Zach } from './231 - Power of Two';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [1, true],
    [16, true],
    [3, false]
  ],
  descriptor: 'The number %p is a power of two: %p',
  solutions: [
    ['Zach\'s isPowerOfTwo', isPowerOfTwo_Zach ],
    ['Grey\'s isPowerOfTwo', isPowerOfTwo_Grey ],
  ],
  tester: (isPowerOfTwo: IsPowerOfTwo) =>
    (n: number, expected: boolean) => {
      expect(isPowerOfTwo(n)).toEqual(expected);
    }
});
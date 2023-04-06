import { ReverseBits, reverseBits_Grey, reverseBits_Zach } from './190 - Reverse Bits';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [43261596, 964176192],
    [4294967293, 3221225471],
  ],
  descriptor: 'The reverse of %p is %p',
  solutions: [
    ['Zach\'s reverseBits', reverseBits_Zach],
    ['Grey\'s reverseBits', reverseBits_Grey],
  ],
  tester: (reverseBits: ReverseBits) =>
    (n: number, expected: number) => {
      expect(reverseBits(n)).toEqual(expected);
    }
});
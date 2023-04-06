import { HammingWeight, hammingWeight_Grey, hammingWeight_Zach } from './191 - Number of 1 Bits';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [0b00000000000000000000000000001011, 3],
    [0b00000000000000000000000010000000, 1],
    [0b11111111111111111111111111111111, 32],
  ],
  descriptor: 'The number of 1 bits in %p is %p',
  solutions: [
    ['Zach\'s hammingWeight', hammingWeight_Zach ],
    ['Grey\'s hammingWeight', hammingWeight_Grey ],
  ],
  tester: (hammingWeight: HammingWeight) =>
    (n: number, expected: number) => {
      expect(hammingWeight(n)).toEqual(expected);
    }
});
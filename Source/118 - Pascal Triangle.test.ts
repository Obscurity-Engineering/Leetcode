import { Generate, generate_Grey, generate_Zach } from './118 - Pascal Triangle';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [5, [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]],
    [1, [[1]]],
  ],
  descriptor: 'A Pascal Triangle of height %p is %p',
  solutions: [
    ['Zach\'s generate', generate_Zach ],
    ['Grey\'s generate', generate_Grey ],
  ],
  tester: (generate: Generate) =>
    (numRows: number, expected: number[][]) => {
      const actual = generate(numRows);
      expect(actual).toEqual(expected);
    }
});
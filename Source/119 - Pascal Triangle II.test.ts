import { GetRow, getRow_Grey, getRow_Zach } from './119 - Pascal Triangle II';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [3, [1, 3, 3, 1]],
    [0, [1]],
    [1, [1, 1]],
  ],
  descriptor: 'Row %p of Pascal Triangle is %p',
  solutions: [
    ['Zach\'s getRow', getRow_Zach ],
    ['Grey\'s getRow', getRow_Grey ],
  ],
  tester: (getRow: GetRow) =>
    (rowIndex: number, expected: number[]) => {
      const actual = getRow(rowIndex);
      expect(actual).toEqual(expected);
    }
});
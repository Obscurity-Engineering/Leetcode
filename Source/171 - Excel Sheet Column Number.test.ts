import { TitleToNumber, titleToNumber_Grey, titleToNumber_Zach } from './171 - Excel Sheet Column Number';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    ['A', 1],
    ['AB', 28],
    ['ZY', 701],
  ],
  descriptor: 'Column title %p is the %pth column',
  solutions: [
    ['Zach\'s titleToNumber', titleToNumber_Zach ],
    ['Grey\'s titleToNumber', titleToNumber_Grey ],
  ],
  tester: (titleToNumber: TitleToNumber) =>
    (columnTitle: string, columnNumber: number) => {
      expect(titleToNumber(columnTitle)).toEqual(columnNumber);
    }
});
import { ConvertToTitle, convertToTitle_Grey, convertToTitle_Zach } from './168 - Excel Sheet Column Title';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [1, 'A'],
    [28, 'AB'],
    [701, 'ZY'],
  ],
  descriptor: 'Column number %p should have a title of %p',
  solutions: [
    ['Zach\'s convertToTitle', convertToTitle_Zach ],
    ['Grey\'s convertToTitle', convertToTitle_Grey ],
  ],
  tester: (convertToTitle: ConvertToTitle) =>
    (columnNumber: number, columnTitle: string) => {
      expect(convertToTitle(columnNumber)).toEqual(columnTitle);
    }
});
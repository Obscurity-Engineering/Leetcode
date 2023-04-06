import { SummaryRanges, summaryRanges_Grey, summaryRanges_Zach } from './228 - Summary Ranges';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [[0, 1, 2, 4, 5, 7], ['0->2', '4->5', '7']],
    [[0, 2, 3, 4, 6, 8, 9], ['0', '2->4', '6', '8->9']],
  ],
  descriptor: 'The ranges of %p are %p',
  solutions: [
    ['Zach\'s summaryRanges', summaryRanges_Zach],
    ['Grey\'s summaryRanges', summaryRanges_Grey],
  ],
  tester: (summaryRanges: SummaryRanges) =>
    (nums: number[], expected: string[]) => {
      expect(summaryRanges(nums)).toEqual(expected);
    }
});
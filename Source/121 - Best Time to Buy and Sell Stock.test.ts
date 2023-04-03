import { MaxProfit, maxProfit_Grey, maxProfit_Zach } from './121 - Best Time to Buy and Sell Stock';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [[7, 1, 5, 3, 6, 4], 5],
    [[7, 6, 4, 3, 1], 0],
  ],
  descriptor: 'The maximum profit from %p is %p',
  solutions: [
    ['Zach\'s maxProfit', maxProfit_Zach ],
    ['Grey\'s maxProfit', maxProfit_Grey ],
  ],
  tester: (maxProfit: MaxProfit) =>
    (prices: number[], expected: number) => {
      const actual = maxProfit(prices);
      expect(actual).toEqual(expected);
    }
});
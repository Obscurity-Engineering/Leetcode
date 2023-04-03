/**
 * {@link https://leetcode.com/problems/best-time-to-buy-and-sell-stock/ | Best Time to Buy and Sell Stock}
 * 
 * You are given an array `prices` where `prices[i]` is the price of a given 
 * stock on the `ith` day.
 * 
 * You want to maximize your profit by choosing a **single day** to buy one
 * stock and choosing a **different day in the future** to sell that stock.
 * 
 * Return *the maximum profit you can achieve from this transaction*. If you
 * cannot achieve any profit, return `0`.
 * 
 * Constraints:
 * - `1 <= prices.length <= 105`
 * - `0 <= prices[i] <= 104`
 */
export type MaxProfit = (prices: number[]) => number;

export function maxProfit_Zach(prices: number[]): number {
  if(prices.length < 2)
    return 0;

  let minimumPrice = prices[0];
  let maximumProfit = prices[1] - prices[0];

  for(let index = 1; index < prices.length; index++) {
    const tentativeProfit = prices[index] - minimumPrice;
    maximumProfit = Math.max(tentativeProfit, maximumProfit);
    minimumPrice = Math.min(prices[index], minimumPrice);
  }

  if(maximumProfit < 0) 
    maximumProfit = 0;

  return maximumProfit;
}

export function maxProfit_Grey(prices: number[]): number {
  prices;
  return 0;
}
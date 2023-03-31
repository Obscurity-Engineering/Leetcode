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
  prices;
  return 0;
}

export function maxProfit_Grey(prices: number[]): number {
  let localMinimum = Infinity;
  let profit = 0;
  for (const price of prices) {
    localMinimum = Math.min(localMinimum, price);
    profit = Math.max(profit, price - localMinimum);
  }
  return profit;
}
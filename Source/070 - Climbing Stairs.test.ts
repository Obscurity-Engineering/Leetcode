import { climbStairs } from './070 - Climbing Stairs';

describe('climbStairs', () => {
  test.each([
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 5]
  ])('%p stairs can be climbed in %p ways', (height, ways) => {
    expect(climbStairs(height)).toBe(ways);
  });
});
import { climbStairs } from './70 - Climbing Stairs';

describe('climbStairs', () => {
  test.each([
    [4, 2],
    [8, 2]
  ])('%p stairs can be climbed in %p ways', (x, sqrt) => {
    expect(climbStairs(x)).toBe(sqrt);
  });
});
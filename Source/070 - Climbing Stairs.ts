/**
 * {@link https://leetcode.com/problems/climbing-stairs/ | Climbing Stairs}
 * You are climbing a staircase. It takes `n` steps to reach the top.
 * 
 * Each time you can either climb `1` or `2` steps. In how many distinct ways 
 * can you climb to the top?
 * 
 * **Constraints:**
 * - `1 <= n <= 45`
 */
export function climbStairs(n: number): number {
  let possiblePaths = 1;
  let inProgressDoubleSteps = 1;
  for (let i = 1; i < n; i++) {
    const newSingleStepPaths = possiblePaths;
    const newDoubleStepPaths = possiblePaths;

    const completedDoubleSteps = inProgressDoubleSteps;
    inProgressDoubleSteps = newDoubleStepPaths;

    possiblePaths = newSingleStepPaths + completedDoubleSteps;
  }
  return possiblePaths;
}
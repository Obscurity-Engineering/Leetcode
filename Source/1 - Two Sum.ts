/**
 * Given an array of integers `values` and an integer `target`, return indices of the two numbers such that they add up to `target`.
 *
 * You may assume that each input would have ***exactly one solution***, and you may not use the *same* element twice.
 *
 * You can return the answer in any order.
 * 
 * Constraints:
 * - 2 \<= values.length \<= 103
 * - -109 \<= values[i] \<= 109
 * - -109 \<= target \<= 109
 * - Only one valid answer exists.
 */
export function twoSum(values: number[], target: number): number[] {

  // Brute Force: Nested Loops, compare every value to every value
  // [1, 2, 3] 5 => [1, 2]
  // [5, 0, 9, 1, 3] 6 => [0, 3]

  // nums[index] = value
  // add object with key of index and value of element to container
  // subtract current element from target, check in container for the resulting value
  // if not found, add current element value with its key as index
  // one pass for loop adding elements with their index until the difference is found
  const visited: Map<number, number> = new Map();
  visited.set(values[0], 0);

  for(let curr = 1; curr < values.length; curr++) {
    const difference = target - values[curr]; // 5 - 3 = 2
    const previousValue = visited.get(difference);

    if(previousValue !== undefined) {
      return [previousValue, curr];
    } else {
      visited.set(values[curr], curr);
    }

  }

  return [];
}
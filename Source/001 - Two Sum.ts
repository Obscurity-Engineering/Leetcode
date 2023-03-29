/**
 * {@link https://leetcode.com/problems/two-sum/ | Two Sum}
 * 
 * Given an array of integers `values` and an integer `target`, return indices 
 * of the two numbers such that they add up to `target`.
 *
 * You may assume that each input would have ***exactly one solution***, and 
 * you may not use the *same* element twice.
 *
 * You can return the answer in any order.
 * 
 * Constraints:
 * - 2 \<= values.length \<= 103
 * - -109 \<= values[i] \<= 109
 * - -109 \<= target \<= 109
 * - Only one valid answer exists.
 */
 
export function twoSum(values: number[], target: number): [number, number] {
  const remainderLookup: Map<number, number> = new Map();

  for (const [index, value] of values.entries()) {
    const match = remainderLookup.get(value);
    
    if (match !== undefined)
      return [match, index];
    
    const remainder = target - value;
    remainderLookup.set(remainder, index);
  }
  
  throw new Error('Should return value');
}
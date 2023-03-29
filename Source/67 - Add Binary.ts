/** 
 * {@link https://leetcode.com/problems/add-binary/ | Add Binary}
 * Given two binary strings `a` and `b`, return *their sum as a binary string.*
 * 
 * **Constraints:**
 * - `1 <= a.length, b.length <= 10^4`
 * - `a` and `b` consist only of `'0'` or `'1'` characters.
 * - Each string does not contain leading zeros except for the zero itself.
 */

export function addBinary(a: string, b: string): string {
  const largerLength = Math.max(a.length, b.length);
  a = a.padStart(largerLength, '0');
  b = b.padStart(largerLength, '0');

  let carry = 0;
  const accumulator = [];
  for (let i = a.length - 1; i >= 0; i--) {
    let sum = carry;
    if (a[i] === '1')
      sum += 1;
    
    if (b[i] === '1')
      sum += 1;
    
    accumulator.push(sum % 2);
    carry = Math.floor(sum / 2);
  }

  if (carry === 1)
    accumulator.push(1);

  return accumulator.reverse().join('');
}
/**
 * {@link https://leetcode.com/problems/excel-sheet-column-number/}
 * 
 * Given a string `columnTitle` that represents the column title as appear in an 
 * Excel sheet, return *its corresponding column number*.
 * 
 * For example:
 * ```
 * A -> 1
 * B -> 2
 * C -> 3
 * ...
 * Z -> 26
 * AA -> 27
 * AB -> 28
 * ...
 * ```
 * 
 * Constraints:
 * - `1 <= columnTitle.length <= 7`
 * - `columnTitle` consists only of uppercase English letters.
 * - `columnTitle` is in the range `["A", "FXSHRXW"]`.
 */
export type TitleToNumber = (columnTitle: string) => number;

export function titleToNumber_Grey(columnTitle: string): number {
  const A = 'A'.charCodeAt(0);
  let factor = 1;
  let sum = 0;
  for (let i = columnTitle.length - 1; i >= 0; i--) {
    const character = columnTitle.charCodeAt(i);
    sum += (character - A + 1) * factor;
    factor *= 26;
  }
  return sum;
}

export function titleToNumber_Zach(columnTitle: string): number {
  let columnNumber = 0;

  for (let index = 0; index < columnTitle.length; index++) {
    const charCode = columnTitle.charCodeAt(index) - 65 + 1;
    columnNumber = (columnNumber * 26) + charCode;
  }

  return columnNumber;
}

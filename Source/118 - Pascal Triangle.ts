/**
 * {@link https://leetcode.com/problems/pascals-triangle/ | Pascal Triangle}
 * Given an integer `numRows`, return the first numRows of **Pascal's 
 * triangle**.
 * 
 * In **Pascal's triangle**, each number is the sum of the two numbers directly 
 * above it as shown
 * {@link https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif | Figure 1}
 * 
 * Constraints:
 * - `1 <= numRows <= 30`
 */
export type Generate = (numRows: number) => number[][];

export function generate_Zach(numRows: number): number[][] {
  numRows;
  return [];
}

export function generate_Grey(numRows: number): number[][] {
  const rows: number[][] = Array(numRows);

  for (let row = 0; row < numRows; row++) {
    rows[row] = Array(row + 1);
    rows[row][0] = 1;
    for (let column = 0; column < row; column++) {
      const left = rows[row - 1][column];
      const top = rows[row - 1][column + 1] ?? 0;
      rows[row][column + 1] = left + top;
    }
  }

  return rows;
}
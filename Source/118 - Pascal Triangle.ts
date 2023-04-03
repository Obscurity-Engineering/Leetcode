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
  if(numRows === 1)
    return [[1]];

  const pascalTriangle: number[][] = [[1], [1,1]];

  for(let rowNumber = 2; rowNumber < numRows; rowNumber++) {
    const rowSize = rowNumber + 1;
    const newRow: number[] = [1];

    for(let rowIndex = 1; rowIndex < rowSize - 1; rowIndex++) {
      const currentValue = pascalTriangle[rowNumber - 1][rowIndex - 1] + pascalTriangle[rowNumber - 1][rowIndex]; // Pattern that applies to all "middle" row values
      newRow.push(currentValue);
    }
    
    newRow.push(1);
    pascalTriangle.push(newRow);
  }

  return pascalTriangle;
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
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

  const pascalTriangle: number[][] = [[1], [1,1]]; // These don't fit the pattern, so initialize them here

  // Start at row 2 since we initialized rows 0 and 1 already
  for(let rowNumber = 2; rowNumber < numRows; rowNumber++) {
    const rowSize = rowNumber + 1;
    const newRow: number[] = [1]; // Add starting element

    for(let rowIndex = 1; rowIndex < rowSize - 1; rowIndex++) {
      const currentValue = pascalTriangle[rowNumber - 1][rowIndex - 1] + pascalTriangle[rowNumber - 1][rowIndex]; // Pattern that applies to all "middle" row values
      newRow.push(currentValue);
    }
    
    newRow.push(1); // Add ending element
    pascalTriangle.push(newRow);
  }

  return pascalTriangle;
}

export function generate_Grey(numRows: number): number[][] {
  numRows;
  return [];
}
/**
 * {@link https://leetcode.com/problems/pascals-triangle-ii/ | Pascal Triangle II}
 * 
 * Given an integer `rowIndex`, return the rowIndexth (0-indexed) row of the
 * **Pascal's triangle**.
 * 
 * In **Pascal's triangle**, each number is the sum of the two numbers directly
 * above it as shown
 * {@link https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif | Figure 1}
 * 
 * Constraints:
 * - `0 <= rowIndex <= 33`
 */
export type GetRow = (rowIndex: number) => number[];

export function getRow_Zach(rowIndex: number): number[] {
  if(rowIndex === 0)
    return [1];

  const pascalTriangle: number[][] = [[1], [1,1]]; 
  
  for(let rowNumber = 2; rowNumber <= rowIndex; rowNumber++) {
    const rowSize = rowNumber + 1;
    const newRow: number[] = [1]; 

    for(let index = 1; index < rowSize - 1; index++) {
      const currentValue = pascalTriangle[rowNumber - 1][index - 1] + pascalTriangle[rowNumber - 1][index]; 
      newRow.push(currentValue);
    }
    
    newRow.push(1); 
    pascalTriangle.push(newRow);
  }

  console.log(pascalTriangle);

  return pascalTriangle[rowIndex];
}

export function getRow_Grey(rowIndex: number): number[] {
  const finalRowLength = rowIndex + 1;
  const row: number[] = Array(finalRowLength);
  let previousValue = 1;

  for (let rowLength = 1; rowLength <= finalRowLength; rowLength++) {
  
    for (let column = 0; column < rowLength; column++) {
      const currentValue = row[column] ?? 0;
      row[column] = previousValue + currentValue;
      previousValue = currentValue;
    }
    previousValue = 0;
  
  }

  return row;
}
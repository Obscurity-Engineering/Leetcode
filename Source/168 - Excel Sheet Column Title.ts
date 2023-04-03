/**
 * {@link https://leetcode.com/problems/excel-sheet-column-title/ | Excel Sheet Column Title}
 * 
 * Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.
 * 
 * For example:
 *
 * A -\> 1
 * B -\> 2
 * C -\> 3
 * ...
 * Z -\> 26
 * AA -\> 27
 * AB -\> 28 
 * ...
 * 
 * Constraints:
 * - 1 \<= columnNumber \<= 2^31 - 1
 */
export type ConvertToTitle = (columnNumber: number) => string;

// No idea on this one
export function convertToTitle_Zach(columnNumber: number): string {

  let columnTitle = '';

  while(columnNumber > 0) {
    columnNumber--;
    const charCode = columnNumber % 26;
    const letter = String.fromCharCode(65 + charCode);
    columnTitle = letter + columnTitle;
    columnNumber = (columnNumber - charCode) / 26; // Not sure why I needed to subtract charCode for my solution to work
  }

  return columnTitle;
}

export function convertToTitle_Grey(columnNumber: number): string {
  columnNumber;
  return '';
}
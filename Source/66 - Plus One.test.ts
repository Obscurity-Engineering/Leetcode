import { plusOne } from './66 - Plus One';

describe('plusOne', () => {
  test.each([
    [[1, 2, 3], [1, 2, 4]],
    [[4, 3, 2, 1], [4, 3, 2, 2]],
    [[9], [1, 0]],
  ])(
    '%p + 1 = %p', 
    (input, output) => {
      expect(plusOne(input)).toBe(output);
    });
});
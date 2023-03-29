import { twoSum } from './001 - Two Sum';

describe('twoSum', () => {
  test.each([
    [[2, 7, 11, 15], 9, [0, 1]],
    [[3, 2, 4], 6, [1, 2]],
    [[3, 3], 6, [0, 1]],
    [[5, 0, 9, 1, 3], 6, [0, 3]]
  ])('Should find that %p finds sum %p is created by indices %p', (numbers, target, expected) => {
    expect(twoSum(numbers, target)).toEqual(expected);
  });
});
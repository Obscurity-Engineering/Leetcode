import { MoveZeroes, moveZeroes_Grey, moveZeroes_Zach } from './283 - Move Zeroes';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [[0, 1, 0, 3, 12], [1, 3, 12, 0, 0]],
    [[0], [0]]
  ],
  descriptor: 'The array %p with zeroes moved to the end is %p',
  solutions: [
    ['Zach\'s moveZeroes', moveZeroes_Zach],
    ['Grey\'s moveZeroes', moveZeroes_Grey],
  ],
  tester: (moveZeroes: MoveZeroes) =>
    (nums: number[], expected: number[]) => {
      moveZeroes(nums);
      expect(nums).toEqual(expected);
    }
});
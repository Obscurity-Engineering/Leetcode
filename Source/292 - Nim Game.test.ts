import { CanWinNim, canWinNim_Grey, canWinNim_Zach } from './292 - Nim Game';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [4, false],
    [1, true],
    [2, true],
  ],
  descriptor: 'With %p stones, the first player can win: %p',
  solutions: [
    ['Zach\'s canWinNim', canWinNim_Zach],
    ['Grey\'s canWinNim', canWinNim_Grey],
  ],
  tester: (canWinNim: CanWinNim) =>
    (n: number, expected: boolean) => {
      expect(canWinNim(n)).toEqual(expected);
    }
});
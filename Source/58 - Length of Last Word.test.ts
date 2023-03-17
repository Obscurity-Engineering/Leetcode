import { lengthOfLastWord } from './58 - Length of Last Word';

describe('lengthOfLastWord', () => {
  test.each([
    ['Hello World', 5],
    ['   fly me   to   the moon  ', 4],
    ['luffy is still joyboy', 6],
  ])('The last word is %p with length %p.', (word, length) => {
    expect(lengthOfLastWord(word)).toBe(length);
  });
});
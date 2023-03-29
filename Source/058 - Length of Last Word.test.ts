import { LengthOfLastWord, lengthOfLastWord_Grey, lengthOfLastWord_Zach } from './058 - Length of Last Word';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    ['Hello World', 5],
    ['   fly me   to   the moon  ', 4],
    ['luffy is still joyboy', 6],
  ],
  descriptor: 'The last word is %p with length %p.',
  solutions: [
    ['Grey\'s lengthOfLastWord', lengthOfLastWord_Grey],
    ['Zach\'s lengthOfLastWord', lengthOfLastWord_Zach]
  ],
  tester: (lengthOfLastWord: LengthOfLastWord) =>
    (word: string, length: number) => {
      expect(lengthOfLastWord(word)).toBe(length);
    }
}); 
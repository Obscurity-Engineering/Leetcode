import { WordPattern, wordPattern_Grey, wordPattern_Zach } from './290 - Word Pattern';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    ['abba', 'dog cat cat dog', true],
    ['abba', 'dog cat cat fish', false],
    ['aaaa', 'dog cat cat dog', false],
  ],
  descriptor: 'The pattern %p matches the string %p: %p',
  solutions: [
    ['Zach\'s wordPattern', wordPattern_Zach],
    ['Grey\'s wordPattern', wordPattern_Grey],
  ],
  tester: (wordPattern: WordPattern) =>
    (pattern: string, str: string, expected: boolean) => {
      expect(wordPattern(pattern, str)).toEqual(expected);
    }
});
import { IsAnagram, isAnagram_Grey, isAnagram_Zach } from './242 - Valid Anagram';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    ['anagram', 'nagaram', true],
    ['rat', 'car', false],
  ],
  descriptor: 'The strings %p and %p are anagrams: %p',
  solutions: [
    ['Zach\'s isAnagram', isAnagram_Zach],
    ['Grey\'s isAnagram', isAnagram_Grey],
  ],
  tester: (isAnagram: IsAnagram) =>
    (s: string, t: string, expected: boolean) => {
      expect(isAnagram(s, t)).toEqual(expected);
    }
});
import { IsIsomorphic, isIsomorphic_Grey, isIsomorphic_Zach } from './205 - Isomorphic Strings';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    ['egg', 'add', true],
    ['foo', 'bar', false],
    ['paper', 'title', true],
  ],
  descriptor: 'The strings %p and %p are isomorphic: %p',
  solutions: [
    ['Zach\'s isIsomorphic', isIsomorphic_Zach],
    ['Grey\'s isIsomorphic', isIsomorphic_Grey],
  ],
  tester: (isIsomorphic: IsIsomorphic) =>
    (s: string, t: string, expected: boolean) => {
      expect(isIsomorphic(s, t)).toEqual(expected);
    }
});
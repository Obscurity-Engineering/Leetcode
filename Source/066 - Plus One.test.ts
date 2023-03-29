import { PlusOne, plusOne_Grey, plusOne_Zach } from './066 - Plus One';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [[1, 2, 3], [1, 2, 4]],
    [[4, 3, 2, 1], [4, 3, 2, 2]],
    [[9], [1, 0]],
  ],
  descriptor: '%p + 1 = %p',
  solutions: [
    ['Grey\'s plusOne', plusOne_Grey],
    ['Zach\'s plusOne', plusOne_Zach]
  ],
  tester: (plusOne: PlusOne) => 
    (input: number[], output: number[]) => {
      expect(plusOne(input)).toEqual(output);
    }
});
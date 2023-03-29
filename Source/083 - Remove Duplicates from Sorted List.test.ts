import { DeleteDuplicates, deleteDuplicates_Grey, deleteDuplicates_Zach } from './083 - Remove Duplicates from Sorted List';
import { toLinkedList } from './common/LinkedList';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [[1, 1, 2], [1, 2]],
    [[1, 1, 2, 3, 3], [1, 2, 3]],
  ],
  descriptor: 'Should reduce %p to %p',
  solutions: [
    ['Grey\'s deleteDuplicates', deleteDuplicates_Grey],
    ['Zach\'s deleteDuplicates', deleteDuplicates_Zach]
  ],
  tester: (deleteDuplicates: DeleteDuplicates) =>
    (unfiltered, expected) => {
      const expectedList = toLinkedList(expected);

      const result = deleteDuplicates(toLinkedList(unfiltered));

      expect(result).toEqual(expectedList);
    } 
});
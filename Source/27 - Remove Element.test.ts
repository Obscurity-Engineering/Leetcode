
describe('removeElement', () => {
  test.each([
    [[3, 2, 2, 3], 3, [2, 2]],
    [[0, 1, 2, 2, 3, 0, 4, 2], 2, [0, 1, 4, 0, 3]],
  ])('Should remove %p from %p into %p', (nums, val, expected) => {
    const result = removeElement(nums, val);
    const newArray = nums.slice(0, result);
    newArray.sort();
    expected.sort();
    expect(newArray).toEqual(expected);
  });
});
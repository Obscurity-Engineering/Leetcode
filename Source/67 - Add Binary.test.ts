import { addBinary } from './67 - Add Binary';

describe('addBinary', () => {
  test.each([
    ['11', '1', '100'],
    ['1010', '1011', '10101'],
  ])('Should convert %p to %p', (a, b, c) => {
    expect(addBinary(a, b)).toBe(c);
  });
});
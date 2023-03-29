import { addBinary } from './067 - Add Binary';

describe('addBinary', () => {
  test.each([
    ['11', '1', '100'],
    ['1010', '1011', '10101'],
  ])('%p + %p = %p', (a, b, c) => {
    expect(addBinary(a, b)).toBe(c);
  });
});
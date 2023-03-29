import { mySqrt } from './69 - Sqrt(x)';

describe('mySqrt', () => {
  test.each([
    [4, 2],
    [8, 2],
    [1, 1],
    [0, 0],
    [16, 4],
    [2147395599, 46339]
  ])('Sqrt(%p) = %p', (x, sqrt) => {
    expect(mySqrt(x)).toBe(sqrt);
  });
});
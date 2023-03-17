import { mySqrt } from './69 - Sqrt(x)';

describe('mySqrt', () => {
  test.each([
    [4, 2],
    [8, 2]
  ])('Sqrt(%p) = %p', (x, sqrt) => {
    expect(mySqrt(x)).toBe(sqrt);
  });
});
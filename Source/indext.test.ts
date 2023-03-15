import { log } from './index';

describe('log', () => {
  it('should log a message', () => {
    const spy = jest.spyOn(console, 'log');
    log('Hello World');
    expect(spy).toHaveBeenCalledWith('Hello World');
  });
});
    
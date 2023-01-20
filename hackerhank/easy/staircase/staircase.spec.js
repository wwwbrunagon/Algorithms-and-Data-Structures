import { jest } from '@jest/globals';
import { staircase } from './staircase-v1.js';

globalThis.console.log = jest.fn();

afterEach(() => {
  jest.resetAllMocks();
});

describe('staircase()', () => {
  test('staircase of size 1', () => {
    staircase(1);

    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith('#');
  });

  test('staircase of size 2', () => {
    staircase(2);

    expect(console.log).toHaveBeenCalledTimes(2);
    expect(console.log).toHaveBeenNthCalledWith(1, ' #');
    expect(console.log).toHaveBeenNthCalledWith(2, '##');
  });

  test('staircase of size 3', () => {
    staircase(3);

    expect(console.log).toHaveBeenCalledTimes(3);
    expect(console.log).toHaveBeenNthCalledWith(1, '  #');
    expect(console.log).toHaveBeenNthCalledWith(2, ' ##');
    expect(console.log).toHaveBeenNthCalledWith(3, '###');
  });

  test('staircase of size 5', () => {
    staircase(5);

    expect(console.log).toHaveBeenCalledTimes(5);
    expect(console.log).toHaveBeenNthCalledWith(1, '    #');
    expect(console.log).toHaveBeenNthCalledWith(2, '   ##');
    expect(console.log).toHaveBeenNthCalledWith(3, '  ###');
    expect(console.log).toHaveBeenNthCalledWith(4, ' ####');
    expect(console.log).toHaveBeenNthCalledWith(5, '#####');
  });
});

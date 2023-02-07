import { iceCreamParlor } from './icecream-parlor-v1.js';

describe('icecreamParlor(money, flavorPrices)', () => {
  test('when the input is in ascending order', () => {
    expect(iceCreamParlor(6, [1, 3, 4, 5, 6])).toEqual([1, 4]);
    //                        0        3
  });

  test('when the input is NOT sorted', () => {
    expect(iceCreamParlor(6, [3, 2, 5, 7, 1])).toEqual([3, 5]);
    //                              2     4
  });
});

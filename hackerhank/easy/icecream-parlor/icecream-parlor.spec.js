import { icecreamParlor } from './icecream-parlor-v1.js';

describe('icecreamParlor(money, flavorPrices)', () => {
  test.only('when the input is in ascending order', () => {
    expect(icecreamParlor(6, [1, 3, 4, 5, 6])).toEqual([0, 3]);
    //                        0        3
  });

  test('when the input is NOT sorted', () => {
    expect(icecreamParlor(6, [3, 2, 5, 7, 1])).toEqual([2, 4]);
    //                              2     4
  });
});

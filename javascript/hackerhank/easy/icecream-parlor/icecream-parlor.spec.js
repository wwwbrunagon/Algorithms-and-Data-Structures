import { iceCreamParlor } from './icecream-parlor-v2.js';

describe('iceCreamParlor(money, flavorPrices)', () => {
  test('when the input is in ascending order', () => {
    expect(iceCreamParlor(6, [1, 3, 4, 5, 6])).toEqual([1, 4]);
  });

  test('when the input is NOT sorted', () => {
    expect(iceCreamParlor(6, [3, 2, 5, 7, 1])).toEqual([3, 5]);
  });

  test('when the input contain duplicates', () => {
    expect(iceCreamParlor(6, [2, 3, 5, 3, 2, 7])).toEqual([2, 4]);
  });
});


/**
 * Finds the indices of two distinct indices in `flavors` that when
 * added together are equal to `money`.
 *
 * NOTE: The challenge requires the output indices to start at 1 😅.
 *
 * ASSUME:
 *
 * • There is always a single, correct solution.
 * • The input array is NOT sorted.
 * • The input array could contain duplicate values.
 *
 * @sig Int -> [Int] -> [Int, Int]
 * @param {number} money
 * @param {Array<number>} prices
 * @returns {[number, number]}
 */
/**
 * Finds the indices of two distinct indices in `flavors` that when
 * added together are equal to `money`.
 *
 * NOTE: The challenge requires the output indices to start at 1 😅.
 *
 * ASSUME:
 *
 * • There is always a single, correct solution.
 * • The input array is NOT sorted.
 * • The input array could contain duplicate values.
 *
 * @sig Int -> [Int] -> [Int, Int]
 * @param {number} money
 * @param {Array<number>} prices
 * @returns {[number, number]}
 */
function iceCreamParlor(money, prices) {
  var seen = {},
      price,
      complement,
      idx = 0;

  for (price of prices) {
    complement = money - price;
    // 1       = 6     - 5

    if (seen[complement] !== undefined)
      return [seen[complement], idx + 1];

    seen[price] = idx + 1;
    ++idx;
  }
}

/*

this part works as storage: 
seen[price] = idx + 1;
  ++idx;  
-----


parlor(6, [1, 3, 4, 5, 6]);
                    i
6 - 1 = 5

seen = { 1: 0 };
     = { 1: 0, 3: 1 }
     = { 1: 0, 3: 1, 4: 2 }
     = { 1: 0, 3: 1, 4: 2, 5: 3 }


[
  [3, 2, 5, 7, 1], // flavor prices for trip 1
  [1, 3, 4, 5, 6], // flavor prices for trip 2
].forEach(prices => {
  console.log(iceCreamParlor(6, prices));
});
*/


console.log(iceCreamParlor(6, [1, 3, 4, 5, 6]))


export { iceCreamParlor };

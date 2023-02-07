/**
 * Finds the distincts indices of two values in `flavors` that when added
 * together produce `money`.
 *
 * ASSUME: There is always a correct, single solution.
 *
 * @sig Int -> [Int] -> [Int, Int]
 * @param {number} money
 * @param {Array<number>} flavorPrices
 * @returns {[number, number]}
 */
function iceCreamParlor(money, flavorPrices) {
    let indices = [-1, -1],
        len = flavorPrices.length,
        i,
        j;

        outerLoop:
    for (i = 0; i < len; ++i) {
      for (j = i + 1; j < len; ++j) {
        if (flavorPrices[i] + flavorPrices[j] === money) {
          indices[0] = i + 1;
          indices[1] = j + 1;
          break outerLoop;
        }
      }
    }
  
    return indices;
  }

iceCreamParlor(6, [1, 3, 4, 5, 6]);
 
  
  export { iceCreamParlor };
  
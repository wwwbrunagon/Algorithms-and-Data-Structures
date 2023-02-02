/**
 * Finds the indices of two values in `flavors` that when added
 * together produce `money`.
 *
 * ASSUME: There is always a correct, single solution.
 *
 * @sig Int -> [Int] -> [Int, Int]
 * @param {number} money
 * @param {Array<number>} flavorPrices
 * @returns {[number, number]}
 */
function icecreamParlor(money, flavorPrices) {
    debugger;
    var indices = [-1, -1],
        len = flavorPrices.length,
        i,
        j;
  
    outerLoop:
    for (i = 0; i < len; ++i) {
      for (j = 0; j < len; ++j) {
        if (flavorPrices[i] + flavorPrices[j] === money) {
          indices[0] = i;
          indices[1] = j;
          break outerLoop;
        }
      }
    }
  
    return indices;
  }
  
  icecreamParlor(6, [1, 3, 4, 5, 6]);
 
  
  export { icecreamParlor };
  
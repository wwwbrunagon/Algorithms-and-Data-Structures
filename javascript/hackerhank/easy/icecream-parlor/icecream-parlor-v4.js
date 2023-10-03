/**
 * @sig Int -> [Int] -> [Int, Int]
 * @param {number} money
 * @param {Array<number>} prices
 * @returns {[number, number]}
 */

function iceCreamParlor(money, prices) {
  let result = [];
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] + prices[j] === money) {
        result.push(i + 1, j + 1);
      }
    }
  }
  return result;
}

console.log(iceCreamParlor(6, [1, 3, 4, 5, 6]));

export { iceCreamParlor };

/**
 * Computes the addition `x` and `y`.
 *
 * @sig Number Number -> Number
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
function add(x, y) {
  return x + y;
}

/**
 * Sort callback for ascending order.
 *
 * @sig Int Int -> Int
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function sortAsc(x, y) {
  return x - y;
}

/**
 * Finds the min and max sum of the five-integer array.
 *
 * ASSUME: The input always contains five positive integers and is
 * sorted in ascending order.
 *
 * @sig [Int] -> { min: Int, max: Int }
 * @param {number} xs
 * @returns {{ min: number, max: number }}
 */

function miniMaxSum(xs) {
  return {
    min: xs.reduce(add, 0) - xs[xs.length - 1],
    max: xs.reduce(add, 0) - xs[0]
  };

}

console.log(miniMaxSum([1, 2, 3, 4, 5]));

export { miniMaxSum };

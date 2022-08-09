const {isEven } = require('../../algorithm/isEven(x)/isEven');

/**
 * Returns an array of even numbers.
 *
 * More functional style version using filter and a callback
 * predicate function.
 *
 * @param {number[]} xs
 * @param {number[]}
 */

function filterEven(xs) {
    const evens = xs.filter(function checkIfEven(x) {
        return x % 2 === 0;
    });

    return evens
}

module.exports = { filterEven };
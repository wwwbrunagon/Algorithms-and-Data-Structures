const {isEven } = require('../../algorithm/isEven(x)/isEven');

/**
 * Returns an array of even numbers.
 *
 * More functional style version using filter and a callback
 * predicate function.
 *
 * @param {number[]} xs
 * @return {number[]}
 */

function filterEven(xs) {
    //
    // callback!!! No parentheses!!!
    //

    return xs.filter(isEven);

}

module.exports = { filterEven };

// isEven(1) // false

// xs.filter(isEven(1))
// xs.filter(false)
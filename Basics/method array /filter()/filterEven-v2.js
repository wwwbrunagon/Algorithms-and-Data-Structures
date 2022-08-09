const { isEven } = require('../../algorithm/isEven(x)/isEven');

/**
 * Returns an array of even numbers.
 *
 * Procedural version.
 *
 * @param {number[]} xs
 * @return {number[]}
 */

function filterEven(xs) {
    const evens = [];

    for (let i = 0; i < xs.length; i++) {
        if(isEven(xs[i])){
            evens.push(xs[i]);
        }
    }
    return evens
}

module.exports = { filterEven };
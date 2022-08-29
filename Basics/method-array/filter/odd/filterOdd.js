/**
 * Returns an array of even numbers.
 *
 * Procedural version.
 *
 * @param {number[]} xs
 * @return {number[]}
 */

function filterOdd(xs){
    const odds = [];

    for (let i = 0; i < xs.length; i++) {
        if (xs[i] %2 !== 0 ) {
            odds.push(xs[i]);
        }
    }

    return odds;
}

module.exports = { filterOdd };

// *\.(spec|test).js
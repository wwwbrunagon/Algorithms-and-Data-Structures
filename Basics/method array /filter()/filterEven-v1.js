/**
 * Returns an array of even numbers.
 *
 * Procedural version.
 *
 * @param {number[]} xs
 * @return {number[]}
 */

function filterEven(xs) {
    const evens =[];

    for (let i = 0; i < xs.length; i++) {
        if (xs[i] %2 ===0){
            evens.push(xs[i]);
        }
    }

    return evens;
}

module.exports = { filterEven };
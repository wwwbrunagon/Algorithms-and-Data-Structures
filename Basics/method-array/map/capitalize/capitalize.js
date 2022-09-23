/**
 * Returns the first character of the input string
 *
 * @param {string} str
 * @returns {string}
 */
function head(str) {
    return str.slice(0,1);
};


/**
 * Returns the string withou the first character
 * @param {string} str
 * @returns {string}
 */
function tail(str) {
    return str.slice(1);
};


/**
 * Uppercases the first char of input string
 *
 * @param {string} str
 * @returns {string}
 *
 * @example
 * capitalize('hello');
 * // -> 'Hello'
 */
function capitalize(str) {
    return head(str).toUpperCase() + tail(str);
};

/**
 * Capitalizes all words of the string
 *
 * @param {string} sentence
 * @returns {string}
 */
function capitalizeAll(sentence) {
    const words = sentence.split(' ');

    return words.map(capitalize).join(' ');
}


module.exports = { capitalizeAll }

//
// • head - the first element of a list
// • tail - the list without the first element
// • take - the first n elements of the list
// • drop (or skip) - the list without the first n elements
//

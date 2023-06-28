import {
  pipe,
  replace,
  includes,
  test,
  ifElse,
  when,
  identity,
  complement,
} from 'ramda';

var subst12With00 = replace('12', '00');

/**
 * Drop either 'AM' or 'PM' from the string `s`.
 *
 * @sig String -> String
 * @param {string} s
 * @returns {string}
 */
var dropMeridiem = replace(/(AM|PM)/, '');

/**
 * Adds 12 to the value of the first capturing group.
 *
 * @sig Any String -> Number
 * @param {Any} _m Not used, but part of replace callback signature.
 * @param {string} g1 The first capturing group.
 * @returns {string}
 *
 * @example
 * add12('...', '11');
 * //=> 23
 */
function add12(_m, g1) {
  return Number(g1) + 12;
}

/**
 * Takes a a meridiem time format and adds 12 to the hour.
 *
 * @sig String -> String
 */
var add12toPM = replace(/([01][0-9])/, add12);

/**
 * Checks if the given string includes 'AM'.
 *
 * @sig String -> Boolean
 */
var includesAM = includes('AM');

/**
 * Checks if the given string includes 'PM'.
 *
 * @sig String -> Boolean
 */
var includesPM = includes('PM');

/**
 * Checks if the given string starts with '12'.
 *
 * @sig String -> Boolean
 */
var startsWith12 = test(/^12/);

/**
 * Converts a 12-hour time format to a 24-hour (military) format.
 *
 * @sig String -> String
 * @param {string} time
 *
 * @example
 * timeConv('11:59:59PM');
 * //=> '12:59:59'
 */
var timeConv = pipe(
  ifElse(
    includesAM,
    subst12With00,
    when(
      includesPM,
      when(
        complement(startsWith12),
        add12toPM,
      ),
    ),
  ),
  dropMeridiem,
);

export { timeConv };

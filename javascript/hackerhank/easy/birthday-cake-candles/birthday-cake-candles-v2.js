/**
 * Counts how many times the largest integer shows up in the input.
 *
 * - T.C: O(n).
 * - S.C: O(1).
 *
 * @sig [Int] -> Int
 */
function birthdayCakeCandles(candles) {
  var max = -Infinity;
  var freq = {};

  for (var cur of candles) {
    max = Math.max(cur, max);
    freq[cur] = ++freq[cur] || 1
  }
  return freq[max];
}


export { birthdayCakeCandles };
const log = console.log.bind(console);

/**
 * Count how many apples and oranges fall within the range of the house.
 */
function count(houseStart, houseEnd, appleTree, orangeTree, apples, oranges) {
  let appleCount = 0;
  let orangeCount = 0;

  for (let i = 0; i < apples.length; ++i) {
    let applePos = appleTree + apples[i];

    if (applePos >= houseStart && applePos <= houseEnd) ++appleCount;
  }

  for (let i = 0; i < oranges.length; ++i) {
    let orangePos = orangeTree + oranges[i];

    if (orangePos >= houseStart && orangePos <= houseEnd) ++orangeCount;
  }

  log(appleCount);
  log(orangeCount);
}

count(7, 10, 4, 12, [4, 2, 6, -3, 9], [-2, 3, -1, -7, -4]);

count(3, 7, 2, 8, [100, 101, 105], [200, 1050, -77]);

//https://gitlab.com/devhowto/devnotes/-/blob/main/algds/hackerrank/easy/apple-and-orange/js/countApplesAndOranges_v1.js?ref_type=heads

/**
 * Count how many apples and oranges fall within a given house.
 */

function count(houseStart, houseEnd, appleTree, orangeTree, apples, oranges) {
  let appleCount = 0;
  let orangeCount = 0;

  for (const apple of apples) {
    if (apple + appleTree >= houseStart && apple + appleTree <= houseEnd) {
      appleCount++;
    }
  }

  for (const orange of oranges) {
    if (orange + orangeTree >= houseStart && orange + orangeTree <= houseEnd) {
      orangeCount++;
    }
  }

  console.log(appleCount);
  console.log(orangeCount);
}

count(7, 10, 4, 12, [4, 2, 6, -3, 9], [-2, 3, -1, -7, -4]);

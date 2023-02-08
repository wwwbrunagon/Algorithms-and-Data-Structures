//https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true
const ageCandles = [4, 2, 1, 4, 3];

function count(candles, n) {
    let quantity = 0;

    for (const item of candles) {
        if (item === n)
            quantity++;
    }

    return quantity;
}


function findMax(arr) {
    let max = -Infinity;

    for (const n of arr) {
        if (n > max)
            max = n;
    }

    return max;
}
 

const randomNumbers = [-4, -4, -3, -101]

console.log(findMax(randomNumbers))

const birthdayCakeCandles = (arr) => {
   const max = findMax(arr);
   const quantity = count(arr, max);
   
   return quantity;
}

console.log(birthdayCakeCandles(randomNumbers))
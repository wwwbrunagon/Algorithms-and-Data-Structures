const arr = [-1, -1, 0, 1, 1];


function countFrequencies(numbers) {
    const frequencies = [0, 0, 0];

    for (const item of numbers) {
        if (item < 0)
            frequencies[0]++
        else if (item > 0)
            frequencies[2]++
        else frequencies[1]++
    }
    return frequencies
};

console.log(countFrequencies([-1,-0.8,0,5,8,10,20,]));

function getRatios(numbers) {
    const len = numbers.length
    const frequencies = countFrequencies(numbers);    
    const [negatives, zeroes, positives] = frequencies;

    return [negatives/len,zeroes/len,positives/len];
}
console.log('getRatios', getRatios([15,0,-2,1,9,0,-1]));

module.exports = { countFrequencies, getRatios }

//https://www.hackerrank.com/challenges/plus-minus/problem
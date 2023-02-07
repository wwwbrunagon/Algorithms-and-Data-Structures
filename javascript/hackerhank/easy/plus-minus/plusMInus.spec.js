const { countFrequencies, getRatios } = require("./plusMinus");

describe('countFrequencies()', () => {
    test('Array have zeros', () => {
        expect(countFrequencies([])).toEqual([0,0,0])
    });

    
    test('Array with a single negative', () => {
        expect(countFrequencies([-3])).toEqual([1,0,0]);
    });

    test('Array with a single zero', () => {
        expect(countFrequencies([0])).toEqual([0,1,0]);
    }); 

    test('Array with a single positve', () => {
        expect(countFrequencies([3])).toEqual([0,0,1]);
    });

    test('Mixed values array', () => {
        const arr = [-1, -1, 0, 1, 1];
        expect(countFrequencies(arr)).toEqual([2,1,2]);
    });

});

describe('getRatios()', () => {
    test('Array with single negative number', () => {
        expect(getRatios([-1])).toEqual([1/1,0/1,0/1]);
    }); 
    test('Array with single zero', () => {
        expect(getRatios([0])).toEqual([0/1,1/1,0/1]);
    });

    test('Array with single positive number', () => {
        expect(getRatios([2])).toEqual([0/1,0/1,1/1]);
    });

    test('Array with two or more negative numbers', () => {
        expect(getRatios([-1,-2,-3,-4])).toEqual([4/4,0/4,0/4]);
    });

    test('Array with two or more zeros, negative and positive numbers', () => {
        expect(getRatios([-1,-2,0,0,1,9,15])).toEqual([2/7,2/7,3/7]);
        expect(getRatios([15,0,-2,1,9,0,-1])).toEqual([2/7,2/7,3/7]);
    });

 });


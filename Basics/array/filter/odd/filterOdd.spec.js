const { filterOdd } = require('./filterOdd')

describe('filterOdd()', () => {
    test('should filter empty array', () => {
        expect(filterOdd([])).toEqual([]);
    });

    test('should return empty array when no odds number exists', () =>{
        expect(filterOdd([2,4,6])).toEqual([]);
    });
});
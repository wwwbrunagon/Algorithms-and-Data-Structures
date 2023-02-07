const { filterEven } = require('./filterEven-v5')

//EDGE CASES

describe('filterEven()', () => {
    it('should filter empty array', () => {
        expect(filterEven([])).toEqual([]);
    });

    it('should return empty array when no even number exists', () =>{
        expect(filterEven([1,3,5])).toEqual([]);
    });

    it('should filter a few values', () => {
        expect(filterEven([1,2,3,4])).toEqual([2,4]);
    });
});
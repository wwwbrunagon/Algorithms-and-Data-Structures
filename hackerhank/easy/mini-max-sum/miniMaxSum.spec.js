import { it } from 'node:test';
import { miniMaxSum } from './miniMaxSum-v1.js'


describe('miniMaxSum()', () => {
    it("Should work with ascending sorted arrays", () => {
        expect(miniMaxSum([1, 2, 3, 4, 5])).toEqual({
            min: 1 + 2 + 3 + 4, //10
            max: 2 + 3 + 4 + 5, //14
        });
    });

    expect(miniMaxSum([1, 2, 5, 7, 9])).toEqual({
        min: 16,
        max: 24,
    });

    it("should work with unsorted arrays", () => {
        // 
        // Edge case: not sorted, but still the four smallest numbers are on 
        // the left, and the four larger numbers are on the right. 
        expect(miniMaxSum([1, 4, 3, 2, 5])).toEqual({
            min: 1 + 2 + 3 + 4, // 10
            max: 2 + 3 + 4 + 5, // 14
        });

        expect(miniMaxSum([5, 4, 3, 2, 1])).toEqual({
            min: 1 + 2 + 3 + 4, // 10
            max: 2 + 3 + 4 + 5, // 14
        });
    })
})
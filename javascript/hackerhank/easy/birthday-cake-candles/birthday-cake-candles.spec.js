import { birthdayCakeCandles } from "./birthday-cake-candles-v2";

describe('birthdayCakeCandles(candles)', () => {
    describe('single-element array', () => {
        test('should find 3 one time', () => {
            expect(birthdayCakeCandles([3])).toEqual(1);
        });
    });

    describe('array with no repeated numbers', () => {
        test('should find 5 one time', () => {
            expect(birthdayCakeCandles([5, 3])).toEqual(1);
        });
    });

    describe('array with repeated numbers', () => {
        test('should find 7 three times', () => {
            expect(birthdayCakeCandles([7, 3, 5, 1, 7, 7, 2])).toEqual(3);
        });
    });
});

import { birthdayCakeCandles } from "./birthday-cake-candles-v2";

describe('birthdayCakeCandles(candles)', () => {
    describe('single-element array', () => {
        test('should find 3 one time', () => {
            expect(birthdayCakeCandles([3])).toEqual(1);
        });
    });
});
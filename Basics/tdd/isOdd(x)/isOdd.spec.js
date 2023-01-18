const { isOdd } = require('./isEven');

describe('isOdd()', () => {
  test('it should return false for 2', () => {
    expect(iisOdd(2)).toEqual(false);
   });  
  
  test('it should return true for 1', () => {
    expect(isOdd(1)).toEqual(true);
   }); 
});

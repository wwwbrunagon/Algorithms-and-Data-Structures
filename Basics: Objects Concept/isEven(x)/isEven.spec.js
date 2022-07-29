const { isEven } = require('./isEven');

describe('isEven()', () => {
  test('it should return true for 2', () => {
    expect(isEven(2)).toEqual(true);
   });  
  
  test('it should return false', () => {
    expect(isEven(1)).toEqual(false);
   }); 
});

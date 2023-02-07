const { add } = require('./addxy');

describe('add(x, y)', () => {
  test('should return 0 by adding 0 and 0', () =>{
    expect(add(0, 0)).toEqual(0);
  });

  test('should return 2by adding 1 and 1', () => {
    expect(add(1, 1)).toEqual(2);    
  });

  test('should return 11 by adding 10 and 1', () => {
    expect(add(10, 1)).toEqual(11);
  });

  test('should return -2 by adding -1 and -1', () => {
    expect(add(-1, -1)).toEqual(-2);
  });

  test('should return 0 by addin -1 and +1', () => {
    expect(add(-1, 1 )).toEqual(0)
  });

   test('should return 0 by addin 1 and 11', () => {
    expect(add(1, -1 )).toEqual(0)
  });    
});
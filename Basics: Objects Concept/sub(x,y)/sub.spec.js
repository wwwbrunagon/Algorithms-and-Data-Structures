const { sub } = require('./sub');

describe('sub(x, y)', () => {
  test('should return 9 subtracting 10 and 1', () => {
    expect(sub(10, 1)).toEqual(9)
  });

  test('should return -9 subtracting 1 and 10', () => {
    expect(sub(1, 10)).toEqual(-9)
  });

  test('should return 0', () => {
    expect(sub(0,0)).toEqual(0);
  });  
})
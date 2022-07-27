const { add1 } = require ('./add1')

describe('add1()', () => {
 test('it should return 1', () => {
   expect(add1(0)).toEqual(1);
 })

  test('it should return -1', () => {
    expect(add1(-2)).toEqual(-1);
  })
})
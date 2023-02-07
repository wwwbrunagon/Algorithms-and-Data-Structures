const { filterByPower } = require('./filterByPower-v2')

const yoda = { id:1, name: 'Yoda', power: 100 };
const aayla = { id:2, name: 'Aayla Secura', power:69 };
const ahsoka = { id: 3, name: 'Ahsoka', power: 100};
const luke = { id: 4, name: 'Luke Skywalker', power: 81};
const jediList = [yoda, aayla, ahsoka, luke]

//
// Filter jedi whose power is >= 80.
//
// !!! EDGE CASES !!!
// !!! RANGES !!!
//


describe('filterByPower()', () => {
   it('should return only jedi whose power is >= 80', () => {
       expect(filterByPower(jediList)).toEqual([yoda, ahsoka, luke])
   });
});
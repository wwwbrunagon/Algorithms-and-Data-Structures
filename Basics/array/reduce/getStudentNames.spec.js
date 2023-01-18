const { getStudentNames } = require('./getStudentNames-v3');

const bruna = { name: 'Bruna', average: 9.5 };
const natalia = { name: 'Natália', average: 6.5 };
const tiago = { name: 'Tiago', average: 6.4 };
const diogo =  { name: 'Diogo', average: 5.5 };
const julia = { name: 'Julia', average: 3.4 };

describe('getStudentNames()', () => {
    describe('when a list of students is empty', () => {
        it('should return an empty list of names', () => {
            expect(getStudentNames([])).toEqual([]);
        });
    });

    describe('when a list contains ones students', () => {
        it('should return a list with one single name', () => {
            expect(getStudentNames([bruna])).toEqual(['Bruna']);
            expect(getStudentNames([natalia])).toEqual(['Natália']);
        });
    });

    describe('when a list contains two or more students', () => {
        it('should return a list with those many names', () => {
            expect(getStudentNames([ bruna, natalia, tiago, diogo, julia])).toEqual([ 'Bruna', 'Natália', 'Tiago', 'Diogo', 'Julia']);
        });
    });

});
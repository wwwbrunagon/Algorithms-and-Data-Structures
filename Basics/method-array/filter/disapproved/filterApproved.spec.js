const { filterApproved } = require('./filterApproved-v1')
const exp = require("constants");

const bruna = { name: 'Bruna', average: 9.5 };
const natalia = { name: 'Natália', average: 6.5 }; // !!!
const tiago = { name: 'Tiago', average: 6.4 }; // !!!
const diogo =  { name: 'Diogo', average: 5.5 };
const julia = { name: 'Julia', average: 3.4 };



describe('filterApproved()', () => {
    describe('when the array is empty', () =>{
        it('should return an empty array', () => {
            expect(filterApproved([])).toEqual([]);
        })
    });

    describe('when the array contains only students who failed', () => {
        it('should return an empty array', () => {
            const failedStudents = [tiago, diogo, julia];

            expect(filterApproved(failedStudents)).toEqual([]);
        });
    });

    describe('when the array contains only students who passed', () => {
        it('should return the array itself', () => {
            const approvedStudents = [bruna, natalia];

            expect(filterApproved((approvedStudents))).toEqual(approvedStudents);
        });
    });

    describe('when the array contains a mix of students', () =>{
        it('should return only students who passed', () => {
            const mixedStudents = [bruna, natalia, tiago, diogo, julia];
            const expectedApprovedStudents = [bruna, natalia];

            expect(filterApproved(mixedStudents)).toEqual(expectedApprovedStudents);
        });
    });

    describe('when the array contains a mix of students', () => {

    });


});
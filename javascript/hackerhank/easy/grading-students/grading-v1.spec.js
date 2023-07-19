import { gradeStudents } from "./grading-v1";

describe('gradeStudents', () => {
    describe('when the grade is < 38', () => {
        it('should return the number withoutany rounding', () => {
            expect(gradeStudents(37)).toEqual(37);
        })
    })    
})
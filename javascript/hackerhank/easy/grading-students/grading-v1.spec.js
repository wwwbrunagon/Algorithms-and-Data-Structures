import { gradeStudents, round } from "./grading-v1";

describe('round()',  () => {
    describe('whenthe difference is NOT less then 3', () => {
        it('should not rounf up', () => {
            expect(round(90)).toEqual(90);
    
            // 75 - 71 = 4
            expect(round(71)).toEqual(71);
    
            // 100 - 96 = 4
            expect(round(96)).toEqual(96);
    
            // 100 - 97 = 3
            expect(round(97)).toEqual(96);
        });
    });


    describe('whenthe difference IS less then 3', () => {
        it('should rounf up', () => {
            // 45 - 42 = 2
            // 3 - 1 < 3
            expect(round(43)).toEqual(45);    
        });
    });
});

describe('gradeStudents', () => {
    describe('when the grade is < 38', () => {
        it('should return the number without any rounding', () => {
            expect(gradeStudents([37])).toEqual([37]);
        });
    }); 
    
    describe('when the grade is >= 38', () => {
        it('should return 42 and not round to 45', () => {
            expect(gradeStudents([42])).toEqual([42])
        })
    })
})
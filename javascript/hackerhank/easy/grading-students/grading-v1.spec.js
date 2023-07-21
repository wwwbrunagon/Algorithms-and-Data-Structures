
describe('round()', () => {
    describe('when the difference is NOT less than 3', () => {
      it('should not round up', () => {
        // 95 - 90 = 5
        expect(round(90)).toEqual(90);
  
        // 75 - 71 = 4
        expect(round(71)).toEqual(71);
  
        // 45 - 42 = 3
        expect(round(42)).toEqual(42);
  
        // 100 - 96 = 4
        expect(round(96)).toEqual(96);
  
        // 100 - 97 = 3
        expect(round(97)).toEqual(97);
      });
    });
  
    describe.only('when the difference IS less than 3', () => {
      it('should round up', () => {
        // 45 - 43 = 2, then round up!
        expect(round(43)).toEqual(45);
      });
    });
  });
  
  describe.skip('Grading Students', () => {
    describe('when the grade is < 38', () => {
      it('should return the number without any rounding', () => {
        expect(gradeStudents([37])).toEqual([37]);
        expect(gradeStudents([13])).toEqual([13]);
      });
    });
  
    describe('when the grade is >= 38', () => {
      it('should return 42 and not round to 45', () => {
        expect(gradeStudents([42])).toEqual([42]);
      });
    });
  });
  
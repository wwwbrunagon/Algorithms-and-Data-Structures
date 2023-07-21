function round(grade) {
    return grade;
  }
  
  // [37, 52, 80, 100, 24]
  
  function gradeStudents(grades) {
    const result = [];
  
    for (let i = 0; i < grades.length; ++i) {
      const grade = grades[i];
  
      if (grade < 40) {
        result.push(grade);
      } else {
        result.push(round(grade));
      }
    }
  
    return result;
  }
  
  export { round, gradeStudents };
  
/**
 * Gets a list of names of students
 *
 * A more FP-like approach using reduce
 *
 * @param {object[]} students
 * @return {Object}
 */
function getStudentNames(students) {
    return students.reduce((namesAcc, student) => {
        namesAcc.push(student.name);
        return namesAcc
    }, []);
}

module.exports = { getStudentNames }


/*
reduce(f, initialValue)

f(acc, elem);
*/

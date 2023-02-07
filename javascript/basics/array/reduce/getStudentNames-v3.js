/**
 * Reducing a function to get a list of arrays
 *
 * @param {string[]} ListOfNames
 * @param {object[]} student
 * @return {Object}
 */
function addStudentNameToArray(ListOfNames, student) {
    const {name} = student;
    ListOfNames.push(name);
    return ListOfNames;
}

/**
 * Gets a list of names of students
 *
 * A more FP-like approach using reduce
 *
 * @param {object[]} students
 * @return {Object}
 */
function getStudentNames(students) {
    return students.reduce(addStudentNameToArray,[]);
}

module.exports = { getStudentNames }


/*
reduce(f, initialValue)

f(acc, elem);
*/

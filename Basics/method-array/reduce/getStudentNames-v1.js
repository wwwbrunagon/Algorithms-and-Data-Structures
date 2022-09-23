/**
 * Gets a list of names of students
 *
 * Procedural implementation using a for loop
 *
 * @param {object[]} students
 * @return {string[]}
 */
function getStudentNames(students) {
    const names = [];

    for (let i = 0; i < students.length; i++ ) {
        names.push(students[i].name)
    }
    return names
}

module.exports = { getStudentNames }
/**
 * Filter students with an average >= 6.5
 *
 * @param {object[]} students
 * @returns {object[]}
 */

function filterApproved(students) {
    const newList = [];

    for (let i = 0; i < students.length; i++) {
        if (students[i].average >= 6.5) {
            newList.push(students[i]);
        }
    }

    return newList
}

module.exports = { filterApproved }


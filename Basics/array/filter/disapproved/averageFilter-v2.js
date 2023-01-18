function expectedAverage(approved) {
    return approved.average >= 6.5;
}

/**
 * Filter students with an average >= 6.5
 *
 * @param {object[]} students
 * @returns {object[]}
 */
function averageFilter(students) {
    const approvedStudents = students.filter(expectedAverage);

    return approvedStudents
}

module.exports = { averageFilter }
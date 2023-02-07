function canJoinOrder(jedi) {
    return jedi.power >= 80
}


/**
 * Filter jedi whose power is >= 80
 * @param {object[]}
 * @returns {object[]}
 */

function filterByPower(jediList) {
    const jediOrderList = jediList.filter(canJoinOrder)

    return jediOrderList
}

module.exports = { filterByPower };
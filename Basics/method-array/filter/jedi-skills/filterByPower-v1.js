/**
 * Filter jedi whose power is >= 80
 * @param {object[]}
 * @returns {object[]}
 */

function filterByPowerV1(jediList) {
    const newList = [];

    for (let i = 0; i < jediList.length; ++i) {
        if (jediList[i].power >= 80){
            newList.push(jediList[i]);
        }
    }
    return newList
}

module.exports = { filterByPower: filterByPowerV1 };
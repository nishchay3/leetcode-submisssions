/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
    const timeObj = {};
    let result = [];

    for (let i = 0; i < position.length; i++) {
        timeObj[position[i]] = (target - position[i]) / speed[i];
    }

    const keys = Object.keys(timeObj).sort((a, b) => a - b);

    for (let i = keys.length - 1; i >= 0; i--) {
        if (i === keys.length - 1) {
            result.push(timeObj[keys[i]]);
        } else if (timeObj[keys[i]] > result[result.length - 1]) {
            result.push(timeObj[keys[i]]);
        }
    }

    return result.length;
    // [0,1,4,7]---------10
    // [10,4.5,6,3,4,5]

    // [0,2,4]-----------10
    // [5,2.6,6]
};
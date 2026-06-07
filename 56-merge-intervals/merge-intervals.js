/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (intervals.length === 1) return intervals;

    intervals.sort((a, b) => a[0] - b[0]);
    const result = [];

    for (let item of intervals) {
        if (result.length && item[0] <= result[result.length - 1][1] && item[1] > result[result.length - 1][1]) {
            result[result.length - 1][1] = item[1];
        } else if (result.length && item[0] <= result[result.length - 1][1] && item[1] <= result[result.length - 1][1]) {
            continue;
        } else {
            result.push(item);
        }
    }

    return result;
};
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    function calculate(first, second, operation) {
        if (operation === "+") {
            return first + second;
        }
        if (operation === "-") {
            return first - second;
        }
        if (operation === "*") {
            return first * second;
        }
        if (operation === "/") {
            return Math.trunc(first / second);
        }
    }

    const stack = [];

    for (let item of tokens) {
        if (!isNaN(item)) {
            stack.push(Number(item));
        } else {
            const second = stack.pop();
            const first = stack.pop();
            stack.push(calculate(first, second, item));
        }
    }

    return stack[0];

}
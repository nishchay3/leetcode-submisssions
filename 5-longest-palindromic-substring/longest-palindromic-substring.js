/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let resultLength = 1;
    let result = "";
    if (s.length < 2) return s;

    for (let i = 0; i < s.length; i++) {
        let left = i - 1;
        let right = i + 1;
        // Odd
        while (left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
            if (right - left + 1 > resultLength) {
                result = s.slice(left, right + 1);
                resultLength = right - left + 1;
            }
            left--;
            right++;
        }

        left = i;
        right = i + 1;
        // Even
        while (left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
            if (right - left + 1 > resultLength) {
                result = s.slice(left, right + 1);
                resultLength = right - left + 1;
            }
            left--;
            right++;
        }
    }

    if (!result.length) return s[0];
    return result;
};
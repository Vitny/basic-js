const { NotImplementedError } = require("../lib");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let result = [];

  while (str.length > 0) {
    let char = str[0];
    let count = 0;
    for (let c of str) {
      if (c === char) {
        count++;
      } else {
        break;
      }
    }

    if (count === 1) {
      result.push(char);
    } else {
      result.push(count + char);
    }

    str = str.slice(count);
  }

  return result.join("");
}

module.exports = {
  encodeLine,
};

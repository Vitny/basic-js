const { NotImplementedError } = require("../lib");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  if (typeof s1 !== "string" && typeof s2 !== "string") {
    throw new Error("parameters must be strings!");
  }

  let arr2 = s2.split("");
  let count = 0;

  for (let ch of s1) {
    const index = arr2.indexOf(ch);
    if (index !== -1) {
      count++;
      arr2.splice(index, 1);
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount,
};

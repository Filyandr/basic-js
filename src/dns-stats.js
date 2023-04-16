const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(arr) {
  // мне нужно сделать из массива, подмассивы, разделитель каждого подмассива является точкой.
  // потом мне нужно посчитать, сколько раз подмассив встречается в массиве
  // вывести подмассив: количество
}

module.exports = {
  getDNSStats
};

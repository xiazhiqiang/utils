'use strict';

/**
 * 排序
 */

/**
 * 快速排序
 */
function quickSort(arr) {
  if (!Array.isArray(arr)) {
    return arr;
  }
  
  var len = arr.length;
  if (len < 1) {
    return arr;
  }

  var k = Math.floor(len / 2),
    v = arr[k],
    i = 0,
    left = [],
    right = [];

  while (i < len) {
    if (arr[i] < v) {
      left.push(arr[i]);
    }
    if (arr[i] > v) {
      right.push(arr[i]);
    }
    i++;
  }

  return quickSort(left).concat([v], quickSort(right));
}

module.exports = {
  quickSort
};
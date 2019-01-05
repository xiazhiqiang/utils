'use strict';

const fs = require('fs');

/**
 * Node fs常用用法
 */

/**
 * 判断文件/文件夹是否存在
 * @param {*} path 
 * @param {*} sync 是否同步，默认同步
 */
function isExist(path, sync) {
  if (false === sync) {
    return new Promise((resolve, reject) => {
      fs.access(path, fs.constants.F_OK, (err) => {
        if (err) {
          reject(false);
        }

        resolve(true);
      });
    });
  }

  // 默认同步
  try {
    fs.accessSync(path, fs.constants.F_OK);
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = {
  isExist
};
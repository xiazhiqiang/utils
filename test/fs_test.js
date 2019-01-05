'use strict';

const Fs = require('../lib/fs');
const path = require('path');
const assert = require('assert');

describe('文件操作测试', () => {

  it('文件是否存在', (done) => {
    const testFilePath = path.join(__dirname, '../package.json');
    const testDirectoryPath = path.join(__dirname, '../node_modules/');

    assert.equal(Fs.isExist(testFilePath), true);
    assert.equal(Fs.isExist(testDirectoryPath), true);

    Fs.isExist(testFilePath, false)
      .then((ret) => {
        assert.equal(ret, true);
      }).catch((err) => {
        assert.equal(err, false);
      }).then(() => {
        done();
      });

  });

});
'use strict';

var Sort = require('../sort.js');
var assert = require('assert');

describe('排序测试', function() {
  var originArray = [6, 2, 7, 3, 8, 9];
  var expectArray = [2, 3, 6, 7, 8, 9];
  it('快速排序测试', function(done) {
    assert.equal(
      Sort.quickSort(originArray).join(''),
      expectArray.join('')
    );
    done();
  });
});
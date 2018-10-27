/**
 * 树形结构
 * {
 *  data: [
 *    {
 *      data: [
 *        {
 *          data: [
 *            {
 *              ...
 *            }
 *          ]
 *        }
 *      ]  
 *    }
 *  ]
 * }
 */

/**
 * 利用尾递归和深度遍历树型结构数据
 * @param {Object} node 
 * @param {Array} stack 
 * @param {Function} cb 
 */
function dfsTreeWithCB(node, stack = [], cb) {
  if (node instanceof Array) {
    if (node.length < 1) {
      return null;
    }
    return dfsTreeWithCB(node[0], [].concat(node.slice(1), stack), cb);
  }

  if (typeof node === 'object') {
    let stop = false;
    if (cb && typeof cb === 'function') {
      stop = cb(node) || false;
    }
    if (stop === true) {
      return null;
    }
    if (stop === 'siblings') { // 不向下递归子节点，遍历堆栈中的兄弟节点
      return dfsTreeWithCB(stack[0], stack.slice(1), cb);
    }

    if (node.data && node.data.length > 0) {
      return dfsTreeWithCB(node.data, stack, cb);
    }

    if (stack[0]) {
      return dfsTreeWithCB(stack[0], stack.slice(1), cb);
    }

    return null;
  }

  return null;
}

export default {
  dfsTreeWithCB
};
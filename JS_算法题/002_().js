// 括号搭配问题，有n个左括号和n个右括号，问有几种情况。
// 思路：使用回溯记录数量，不符合的条件的直接剪枝

/**
 * 输入整数n，返回搭配情况的数量。
 * @param n int整型
 * @return int整型
 */
function getTargetNumber(n) {
  let res = 0;
  backtracing(n, n);
  return res;

  function backtracing(left, right) {
    if (left == 0 && right == 0) {
      res++;
      return;
    }
    if (left > 0) {
      backtracing(left - 1, right);
    }
    // 另一种选择，保证右括号不少于左括号
    if (right > left) {
      backtracing(left, right - 1);
    }
  }
}

module.exports = {
  getTargetNumber: getTargetNumber,
};

/* 面试原题我不记得了，但是原理和美团那题一样，这里就直接放美团的那道题了 */

// 简要描述：提供一个金额，一些优惠券，问至少使用多少张优惠券可以正好覆盖金额？（优惠券数量不限）

/*
使用dp从0开始，转换模型：dp[amount] = Math.min(dp[amount], dp[amount-coin]+1)
每一个数值最优解都是包含了coins中的一个，dp[amount-coin] + 1，
因此需要对将每一个金额对应的结果都算出来，从小到大依次计算出来。
细节方面，需要为dp数组预设巨大值，定义dp[0] = 0
*/
function acount(amount, coins) {
  let dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i < amount + 1; i++) {
    for (let coin of coins) {
      if (coin <= i) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[amount] === Infinity ? "Impossible" : dp[amount];
}

console.log(acount(25, [1, 2, 4, 8]));

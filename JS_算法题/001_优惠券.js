// https://www.nowcoder.com/exam/test/66155220/detail?pid=21910781&examPageSource=Company&testCallback=https%3A%2F%2Fwww.nowcoder.com%2Fexam%2Fcompany&testclass=%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91
/* 简要描述：提供一个金额，一些优惠券，问至少使用多少张优惠券可以正好覆盖金额？（优惠券数量不限） */
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  let amount;
  while ((line = await readline())) {
    let tokens = line.split(" ");
    if (tokens.length === 1) {
      amount = +tokens[0]; // amount转为Number
    } else {
      acount(amount, tokens); // tokens为object，每一个值为string类型
    }
  }
})();

/* 核心代码：
使用dp从0开始，转换模型：dp[amount] = Math.min(dp[amount], dp[amount-coin]+1)
每一个数值最优解都是包含了coins中的一个，dp[amount-coin] + 1，
因此需要对将每一个金额对应的结果都算出来，从小到大依次计算出来。
当然，细节方面，需要为dp数组预设巨大值，需要定义dp[0] = 0
*/
function acount(amount, coins) {
  let dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i < amount + 1; i++) {
    for (let coin of coins) {
      coin = +coin; // coin类型不是Number，记得转换
      if (coin <= i) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  let res = dp[amount] === Infinity ? "Impossible" : dp[amount];
  console.log(res);
}

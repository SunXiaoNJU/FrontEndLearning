/* 多多路上从左到右有N棵树（编号1～N），其中第i个颗树有和谐值Ai。
多多鸡认为，如果一段连续的树，它们的和谐值之和可以被M整除，那么这个区间整体看起来就是和谐的。
现在多多鸡想请你帮忙计算一下，满足和谐条件的区间的数量。
输入：
第一行，有2个整数N和M，表示树的数量以及计算和谐值的参数。
（ 1 <= N <= 100,000, 1 <= M <= 100  ）
第二行，有N个整数Ai, 分别表示第i个颗树的和谐值。
（ 0 <= Ai <= 1,000,000,000 ）
输出：
共1行，每行1个整数，表示满足整体是和谐的区间的数量。
*/
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  // Write your code here
  let N, M, arr;
  while ((line = await readline())) {
    let tokens = line.split(" ");
    if (tokens.length === 2) {
      N = +tokens[0];
      M = +tokens[1];
    } else {
      arr = tokens.map((e) => +e);
      solution();
    }
  }

  function solution() {
    // 利用对象存放余数出现的次数，余数0初始值为1，因为自身可以直接整除
    let record = { 0: 1 };
    // 思路：减去前面余数相同的部分剩下的就可以整除了
    let sumTmp = 0,
      ans = 0;
    for (let i = 0; i < N; i++) {
      sumTmp += arr[i];
      let remainder = sumTmp % M;
      if (!record[remainder]) {
        record[remainder] = 1;
      } else {
        ans += record[remainder];
        record[remainder]++;
      }
    }
    console.log(ans);
  }
})();

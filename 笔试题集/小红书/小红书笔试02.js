// k排序：K排序算法描述如下：首先，算法需要按照某种规则选择该数列上至多K个位置，将其对应的数抽出来，其他的数都往左对齐，
// 之后这K个数排好序之后依次放在原数列末尾。以上过程算作一次操作。
// 你的任务是：对于给定的数列，你需要计算出最少需要多少次上述操作，使得整个数列从小到大排好序。

/* 输入描述：第一行一个正整数T，表示有T组数据。
    对于每一组数据，第一行输入两个正整数n,k；第二行输入n个数a1,a2,....,an。该序列是一个1~n的排列。
    对于所有数据：1≤k≤n≤105,1≤ai≤n, ai≠aj,1≤T≤5
    输入样例：
    2
    5 1
    1 2 3 4 5
    5 2
    1 3 5 4 2 
    输出：
    0
    2
*/
// 最普通的情况——都需要排序，通过率54%
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  let T = -1,
    n = -1,
    k,
    arr;
  while ((line = await readline())) {
    let tokens = line.split(" ");
    if (T === -1) T = +tokens[0];
    else if (n === -1) {
      n = +tokens[0];
      k = +tokens[1];
    } else {
      arr = tokens.map((e) => +e);
      solution();
      n = -1;
    }
  }
  function solution() {
    let ans;
    if (n % k === 1) ans = parseInt(n / k);
    else ans = parseInt(n / k) + 1;
    console.log(ans);
  }
})();

// 用'r''e''d'三个字符组成一个回文串，回文个数为输入的数字，输出回文串。
// 1 <= x <= 10^9   1 <= 输出结果长度 <= 10^5
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  let x;
  while ((line = await readline())) {
    let tokens = line.split(" ");
    if (tokens.length === 1) x = +tokens[0];
    helper(x);
  }
  function helper(len) {
    let ans = "";
    let a = Number.parseInt(len / 3);
    let b = len - 3 * a;
    ans += "red".repeat(a);
    if (b === 1) ans += "r";
    else if (b === 2) ans += "re";
    console.log(ans);
  }
})();
/* 以上完成度为40%，显示为字符串超出长度。
目前思路是对len取模，可惜时间没有来得及 */
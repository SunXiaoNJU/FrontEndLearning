// 腾讯笔试第四题：大整数相减 80%通过率
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  let str1 = "",
    str2;
  while ((line = await readline())) {
    let tokens = line.split(" ");
    if (str1 === "") str1 = tokens[0];
    else {
      str2 = tokens[0];
      solution();
    }
  }
  function solution() {
    let res = "";
    str2 = str2.padStart(str1.length, "0");
    let isSend = 0;
    for (let i = str1.length - 1; i >= 0; i--) {
      let num1 = parseInt(str1[i]),
        num2 = parseInt(str2[i]);
      if (num1 >= num2 + isSend) {
        res = num1 - num2 - isSend + res;
        isSend = 0;
      } else {
        res = 10 + num1 - num2 - isSend + res;
        isSend = 1;
      }
    }
    let index = 0;
    while (res[index] === '0') {
      index++;
    }
    res = res.slice(index);
    console.log(res);
  }
})();
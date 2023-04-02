// 小红书笔试第三题   以下代码81%通过率，未过报错：超时
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  let N = -1,
    M = -1,
    arr,
    arrL,
    arrR,
    str = "",
    arrX,
    record = 0;
  while ((line = await readline())) {
    let tokens = line.split(" ");
    if (N === -1) N = +tokens[0];
    else if (record === 0) {
      arr = tokens.map((e) => +e);
      record++;
    } else if (M === -1) {
      M = +tokens[0];
    } else if (record === 1) {
      arrL = tokens.map((e) => +e);
      record++;
    } else if (record === 2) {
      arrR = tokens.map((e) => +e);
      record = -1;
    } else if (str === "") {
      str = tokens[0];
    } else {
      arrX = tokens.map((e) => +e);
      solution();
    }
  }

  function solution() {
    for (let i = 0; i < M; i++) {
      for (let j = arrL[i] - 1; j <= arrR[i] - 1; j++) {
        if (str[i] === "|") {
          arr[j] = arr[j] | arrX[i];
        } else if (str[i] === "&") {
          arr[j] = arr[j] & arrX[i];
        } else {
          arr[j] = arrX[i];
        }
      }
    }
    let ans = "";
    for (let num of arr) {
      ans += num;
      ans += " ";
    }
    console.log(ans);
  }
})();

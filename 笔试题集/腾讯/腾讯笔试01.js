// 腾讯第二题 满二叉树查询   50% 报错：超时？？
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  let n = -1,
    q = -1,
    x,
    arr = "";
  while ((line = await readline())) {
    let tokens = line.split(" ");
    if (n === -1) n = +tokens[0];
    else if (arr === "") {
      arr = tokens.map((e) => +e);
    } else if (q === -1) {
      q = +tokens[0];
    } else {
      x = +tokens[0];
      solution();
    }
  }
  function solution() {
    if (arr.indexOf(x) === -1) {
      console.log("NO");
    } else {
      console.log("YES");
      let index = arr.indexOf(x);
      if (index >= parseInt(arr.length / 2)) {
        console.log("LEAF");
      } else {
        console.log(arr[index * 2 + 1] + " " + arr[index * 2 + 2]);
      }
    }
  }
})();

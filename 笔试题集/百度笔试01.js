/* 有t组输入，对每一组输入的字符串排列组合成“Baidu”，区分大小写，可以输出“Yes”，不行输出“No” */
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  let t = -1;
  while ((line = await readline())) {
    let tokens = line.split(" ");
    let str,
      process = false;
    if (t === -1) t = +tokens[0];
    else {
      str = tokens[0];
      process = true;
    }
    if (process) helper(str);
  }

  function helper(s) {
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
      if (map.get(s[i])) {
        map.set(s[i], map.get(s[i]) + 1);
      } else {
        map.set(s[i], 1);
      }
    }
    let num_B = 0,
      num_a = 0,
      num_i = 0,
      num_d = 0,
      num_u = 0,
      sum = 0;
    let isSucc = true;
    if (!map.get("B")) {
      isSucc = false;
    } else num_B = map.get("B");
    if (!map.get("a")) {
      isSucc = false;
    } else num_a = map.get("a");
    if (!map.get("i")) {
      isSucc = false;
    } else num_i = map.get("i");
    if (!map.get("d")) {
      isSucc = false;
    } else num_d = map.get("d");
    if (!map.get("u")) {
      isSucc = false;
    } else num_u = map.get("u");
    sum = num_B + num_a + num_i + num_d + num_u;
    if (sum !== s.length) isSucc = false;
    if (num_B !== num_a) isSucc = false;
    if (num_i !== num_a) isSucc = false;
    if (num_d !== num_a) isSucc = false;
    if (num_u !== num_a) isSucc = false;
    if (isSucc) console.log("Yes");
    else console.log("No");
  }
})();

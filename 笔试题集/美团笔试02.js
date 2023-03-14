const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  let n,
    arr1 = [],
    arr2 = [],
    record = 0;
  while ((line = await readline())) {
    let tokens = line.split(" ");
    if (tokens.length === 1) {
      n = +tokens[0];
      continue;
    }
    if (!record++) arr1 = tokens.map((e) => +e);
    else {
      arr2 = tokens.map((e) => +e);
      record++;
    }
    if (record > 1) helper();
  }
  function helper() {
    let arr = Array(Math.max(...arr2) + 1).fill(0);
    for (let i = 0; i < n; i++) {
      for (let j = arr1[i]; j <= arr2[i]; j++) {
        arr[j]++;
      }
    }

    let maxNum = Math.max(...arr);
    let ans = 0;
    for (const num of arr) {
      if (num === maxNum) {
        ans++;
      }
    }
    console.log(maxNum, ans);
  }
})();

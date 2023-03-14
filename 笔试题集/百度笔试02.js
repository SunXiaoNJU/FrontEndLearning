/* t组输入，每组包含：n表示有n个数字，k表示目标个数，如果n个数字中正好有k个在[l,r]范围中则输出l r，否则输出-1 */
/* 例如：
输入：
2
4 2
1 2 1 2
4 3
1 2 1 2
输出：
1 1
-1
*/
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  let t, n, k;
  while ((line = await readline())) {
    let tokens = line.split(" ");
    let arr;
    let process = false;
    if (tokens.length === 1) t = +tokens[0];
    else if (tokens.length === 2) {
      n = +tokens[0];
      k = +tokens[1];
    } else {
      arr = tokens.map((e) => +e);
      process = true;
    }
    if (process) helper(arr, k);
  }

  function helper(arr, k) {
    arr.sort();
    let map = new Map();
    let tmp = arr[0],
      record = 0;
    for (let num of arr) {
      if (num === tmp) {
        record++;
      } else {
        map.set(tmp, record);
        tmp = num;
        record = 1;
      }
    }
    let sum = 0,
      begin = 0,
      hasGet = false;
    for (const [key, value] of map) {
      if (value === k) {
        console.log(key, key);
        hasGet = true;
        break;
      } else if (value < k) {
        sum += value;
        if (begin) {
          begin = key;
        }
        if (sum === k) {
          console.log(begin, key);
          sum = 0;
          hasGet = true;
          break;
        } else if (sum > k) {
          sum = 0;
          begin = 0;
          continue;
        }
      }
    }
    if (!hasGet) console.log(-1);
  }
})();

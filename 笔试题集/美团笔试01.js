const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  let num,
    ans = 0;
  while ((line = await readline())) {
    let tokens = line.split(" ");
    num = +tokens[0];
    if (num < 0) num = -num;
    helper();
  }
  function helper() {
    let s = "" + num;
    let record = 1;
    let i = 0;
    let j = 1;
    while (i < s.length) {
      while (j < s.length) {
        if (s[i] === s[j]) {
          record++;
          j++;
        } else {
          if (record > 1) {
            ans += Number.parseInt(record / 2);
            i = j;
            j++;
            record = 1;
          } else {
            i++;
            j++;
          }
        }
      }
      if (j === s.length) break;
    }
    ans += Number.parseInt(record / 2);
    console.log(ans);
  }
})();

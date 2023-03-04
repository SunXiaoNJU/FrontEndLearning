/* 
空间魔方中有N*N*N个能量粒子。飞船被困在能量值最高的点，能量值最高点有且只有一个。
飞船每到达一个能量粒子就会吸收对应粒子的能量，该粒子会坍缩成小黑洞，飞船不可到达。
小团驾驶的飞船只能从高能粒子驶向低能粒子，且每次只能从6个方向中选择一个前进。（±x,±y,±z）。
计算吸收最高的能量值。
*/
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  // Write your code here
  let N,
    arrs = [];
  while ((line = await readline())) {
    let tokens = line.split(" ");
    if (tokens.length === 1) {
      N = parseInt(tokens[0]);
    } else arrs.push(tokens.map((e) => +e));
    console.log(arrs);
  }

  function fly() {
    arrs.sort((a, b) => {
      parseInt(b[3]) - parseInt(a[3]);
    });
    backtrack(arrs[0][0], arrs[0][1], arrs[0][2], arrs[0][3]);
    function backtrack(a, b, c, sum) {}
  }
})();

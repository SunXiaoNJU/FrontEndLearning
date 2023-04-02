/* 
给定一个数组和target，对数组中每一个数字任意赋予"+" 或 "-"，计算数字之和等于target有多少情况。
*/
function diffNums(nums, target) {
  let res = 0;
  let arr = [];
  backtrack(0, 0, "");
  console.log(res);
  console.log(arr);

  // backtrack回溯算法（这里的numsStr是我为了直观自己加的参数，本题不需要）。
  function backtrack(index, record, numsStr) {
    if (index === nums.length) {
      if (record === target) {
        res++;
        arr.push(numsStr);
      }
      return;
    }

    backtrack(index + 1, record + nums[index], numsStr + "+" + nums[index]);
    backtrack(index + 1, record - nums[index], numsStr + "-" + nums[index]);
  }
}

diffNums([1, 3, 1, 4, 2], 5);

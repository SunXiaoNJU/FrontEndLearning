function bigStr_add(bigStr1, bigStr2) {
  let ans = "";
  // 将短的那个大整数前面补0，这样方便后续的相加
  let isOne = bigStr1.length > bigStr2.length ? true : false;
  let len = isOne ? bigStr1.length : bigStr2.length;
  if (isOne) bigStr2 = "0".repeat(bigStr1.length - bigStr2.length) + bigStr2;
  else bigStr1 = "0".repeat(bigStr2.length - bigStr1.length) + bigStr1;
  // 从低位开始相加一直计算到高位
  let remainder,
    carry = 0;
  for (let i = len - 1; i >= 0; i--) {
    let sumTmp = +bigStr1[i] + +bigStr2[i] + carry;
    if (sumTmp > 9) {
      remainder = sumTmp - 10;
      carry = 1;
    } else {
      remainder = sumTmp;
      carry = 0;
    }
    ans = remainder + ans;
  }
  if (carry) ans = carry + ans;
  return ans;
}

console.log(bigStr_add("324289793247459324759", "234324454534543"));

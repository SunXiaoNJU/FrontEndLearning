function _typeof(value) {
  // 请补全JavaScript函数，要求以字符串的形式返回参数的类型。
  return typeof value;
}
// console.log(_typeof(1));

function _instanceof(left, right) {
  // 要求以Boolean的形式返回第一个参数是否属于第二个参数对象的实例。
  if (left == null) {
    return false;
  }
  while (left.__proto__) {
    if (left.constructor === right) {
      return true;
    } else {
      left = left.__proto__;
    }
  }
}
// class right {}
// let left = new right();
// console.log(_instanceof(left, right));

function _splice(left, right) {
  // 要求以字符串的形式返回两个数字参数的拼接结果。
  return "" + left + right;
}

function _factorial(number) {
  // 要求返回数字参数的阶乘。注意：参数为大于等于0的整数。
  if (number > 1) return number * _factorial(number - 1);
  else return 1;
}

function _abs(number) {
  // 要求返回数字参数的绝对值。
  return Math.abs(number);
}

function _pow(number, power) {
  // 要求返回底数为第一个参数，幂为第二个参数的数值。
  return Math.pow(number, power);
}

function _sqrt(number) {
  // 要求返回数字参数的平方根。
  return Math.sqrt(number);
}

function _remainder(value) {
  // 要求返回数字参数除以2的余数。
  return value % 2;
}

function _sort(array) {
  // 要求将数组参数中的数字 从大到小 进行排序并返回。
  return array.sort((a, b) => b - a);
}
// console.log(_sort([1, 65, 3, 5]));

function _keys(object) {
  // 要求以数组的形式输出对象各个属性的键名。
  let res = [];
  for (const key in object) {
    res.push(key);
  }
  return res;
}
// console.log(_keys({ name: "123", age: 7 }));

function _date(number) {
  // 要求以字符串的形式输出时间戳参数所对应的"年-月-日"。
  return (
    new Date(number).getFullYear() +
    "-" +
    (new Date(number).getMonth() + 1) +
    "-" +
    new Date(number).getDate()
  );
}
// console.log(_date(1631159776311));

function _int(value) {
  // 要求返回数字参数的整数部分。
  return Number.parseInt(value);
}
// console.log(_int(23.9));

function _max(array) {
  // 要求找到数组参数中的最大值并返回。
  let res = array[0];
  for (const num of array) {
    if (num > res) res = num;
  }
  return res;
}

function _search(string) {
  // 要求以boolean的形式返回字符串参数中是否包含数字。
  for (const element of string) {
    if (element >= "0" && element <= "9") return true;
  }
  return false;
}
// console.log(_search("sdf3dsf"));

function remove(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}
// console.log(remove([1, 2, 3, 4, 2, 3, 2], 2));

// 不能修改原数组arr！！！push会修改原数组。
function append(arr, item) {
  return arr.concat([item]);
}
// console.log(append([1, 4, 2, 5], 9));

// 在数组 arr 的 index 处添加元素 item。不要直接修改数组 arr！！结果返回新的数组
function insert(arr, item, index) {
  return arr.slice(0, index).concat([item]).concat(arr.slice(index));
}

// 每个元素平方，不能改变原数组！
function square(arr) {
  return arr.map((b) => b * b);
}
// console.log(square([1, 2, 3, 4]));

// 在数组 arr 中，查找值与 item 相等的元素出现的所有位置
function findAllOccurrences(arr, target) {
  let res = [];
  arr.forEach((el, index) => {
    if (el === target) res.push(index);
  });
  return res;
}
// console.log(findAllOccurrences([1, 2, 4, 5, 6, 2, 5, 8, 3, 2], 2));

// 修改 js 代码中 parseInt 的调用方式，使之通过全部测试用例 0x12 -> 0;  12px -> 12
function parse2Int(num) {
  if (typeof num === "number") return num;
  else {
    let res = "";
    for (const el of num) {
      if (+el >= 0 && +el <= 9) {
        res += el;
      } else break;
    }
    return parseInt(res);
  }
}
// console.log(parse2Int("12px"));

// 统计字符串中每个字符的出现频率
function count(str) {
  let res = {};
  for (const el of str) {
    if (el !== " ") {
      if (res[el]) {
        res[el]++;
      } else res[el] = 1;
    }
  }
  return res;
}
// console.log(count("hello world"));

// 要求将整数参数反转之后输出。
function _reverse(number) {
  // 补全代码
  let isNeg = number < 0;
  if (isNeg) number = -number;

  let numStr = "" + number;
  let res = "";
  for (let i = numStr.length - 1; i >= 0; i--) {
    res += numStr[i];
  }

  if (isNeg) res = "-" + res;
  return +res;
}
// console.log(_reverse(-321));

// 字符串搜索，返回Boolean
function _search(string, value) {
  // 补全代码
  return string.indexOf(value) !== -1;
}
// console.log(_search("asddfggjkl", "ddfg"));

// 实现一个函数返回页面当前url。
function getUrlHref() {
  return location.href;
};

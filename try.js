// let a = 20;
// function fn() {
//   a = 30;
// }
// fn();
// console.log(a); // 30

// const a1 = [1, 2, 3];
// const a2 = [...a1];
// console.log(a2);

// let a10 = a1.map((a) => a * a);
// let a11 = Array.from(a1, (a) => a * a);
// console.log(a10, a11);

// let a3 = ["orange", "apple", "banana", "peach", "pineapple"];
// console.log(
//   a3.sort((e1, e2) => {
//     if (e1 < e2) return -1;
//     return 1;
//   })
// );

// 全排列
// function fullSorted(src) {
//   let arr = [];
//   function list(src, ans) {
//     if (src.length === 0) {
//       arr.push(ans);
//       return;
//     }
//     for (let i = 0; i < src.length; i++) {
//       list(src.slice(0, i) + src.slice(i + 1), ans + src[i]);
//     }
//   }
//   list(src, "");
//   console.log(arr);
// }
// fullSorted("abcd");

// var name = "global";
// var obj = {
//   name: "local",
//   foo: function () {
//     this.name = "foo";
//   }.bind(window),
// };
// var bar = new obj.foo();
// setTimeout(function () {
//   console.log(window.name); // 3. global
// }, 0);
// console.log(bar.name); // 1. foo

// var bar3 = (bar2 = bar);
// bar2.name = "foo2";
// console.log(bar3.name); // 2. foo2

// const p1 = new Promise((resolve, reject) => {
//   resolve("hello");
// })
//   .then((result) => result)
//   .catch((e) => e);

// const p2 = new Promise((resolve, reject) => {
//   throw new Error("报错了");
// })
//   .then((result) => result)
//   .catch((e) => e);

// Promise.all([p1, p2])
//   .then((result) => console.log(result))
//   .catch((e) => console.log(e));

// var romanToInt = function (s) {
//   const symbolValues = new Map();
//   symbolValues.set("I", 1);
//   symbolValues.set("V", 5);
//   symbolValues.set("X", 10);
//   symbolValues.set("L", 50);
//   symbolValues.set("C", 100);
//   symbolValues.set("D", 500);
//   symbolValues.set("M", 1000);
//   let ans = 0;
//   const n = s.length;
//   for (let i = 0; i < n; ++i) {
//     const value = symbolValues.get(s[i]);
//     if (i < n - 1 && value < symbolValues.get(s[i + 1])) {
//       ans -= value;
//     } else {
//       ans += value;
//     }
//   }
//   return ans;
// };
// console.log(romanToInt("MMMCMXCIX"));

// const reg1 = /\d{3}-\d{4}-\d{4}/;
// reg2 = /[0-9\-]+/; // /[0-9-]+/ 也是对的，\可以不加
// console.log(reg1.test("123-2345-9342"));

// function acount(amount, coins) {
//   let dp = Array(amount + 1).fill(Infinity);
//   dp[0] = 0;
//   for (let i = 1; i < amount + 1; i++) {
//     for (let coin of coins) {
//       if (coin <= i) {
//         dp[i] = Math.min(dp[i], dp[i - coin] + 1);
//       }
//     }
//   }
//   let res = dp[amount] === Infinity ? "Impossible" : dp[amount];
//   console.log(res);
// }

// acount(65, [4, 50, 30, 20, 5]);

// for (var i = 0; i < 10; i++) {
//   setTimeout(function () {
//     console.log(i); // 10个10
//   }, 0);
// }

// var bar = [1, 2, 3];
// for (var i in bar) {
//   setTimeout(function () {
//     console.log(bar[i]); // 3 3 3
//   }, 0);

//   console.log(bar[i]); // 1 2 3
// }

// console.log(null instanceof Object); // false

// const obj = {
//   name: "sdf",
//   age: 18,
//   a: "a",
//   b: "b",
// };
// for (const key in obj) {
//   if (Object.hasOwnProperty.call(obj, key)) {
//     const element = obj[key];
//     console.log(element);
//   }
// }

// console.log("  \t\n\r" == false); // true
// console.log(undefined == false); // false
// console.log(false == []); // true
// console.log(false == {}); // false
// console.log(false == ["0"]); // true

// let arr1 = [1, 2, 3];
// let arr2 = [...arr1]; // 浅拷贝
// arr2 = JSON.parse(JSON.stringify(arr1)); // 深拷贝
// console.log(arr2);

// function fn() {
//   this.x = "xxx";
//   return {};
// }
// let a = new fn();
// // 存在返回值 且 返回值为对象，this会指向返回的对象（例外：null，虽然null也是对象，但不影响this的指向）
// console.log(a.x, this, a); // undefined {} {}

// // string -> ASCII
// console.log("b".charCodeAt() - "a".charCodeAt());

// let obj = {
//   "-1.": -1,
//   "0.": 0,
//   "1.": 1,
// };
// for (const key in obj) {
//   if (Object.hasOwnProperty.call(obj, key)) {
//     const element = obj[key];
//     // ~~转换成整数
//     console.log(~~key, element);
//   }
// }

// Appends new elements to the end of an array, and returns the new length of the array.
// console.log([].push(...[1, 2, 3])); // 3

// console.log(new Set([0, 2, 2, 0, 0, 5, 9, {}, {}, NaN, NaN]));

// function foo() {
//   console.log("foo");
//   clearInterval(id)
// }
// id = setInterval(foo, 1000);

// console.log("1`1"); // 1`1

// let a = [];
// console.log(a instanceof Array); // true
// console.log(Array.isArray(a)); // true
// console.log(Object.prototype.toString.call(a) === "[object Array]"); // true
// console.log(typeof a === "array"); // false 	typeof a === 'object'

// console.log("\\\\\\".replace(new RegExp("\\\\\\\\", "gi"), "/")); // /\

// var i = 100;
// function foo() {
//   bbb: try {
//     console.log("position1");
//     return i++;
//   } finally {
//     break bbb;
//   }
//   console.log("position2");
//   return i;
// }
// console.log(foo()); // position1 position2 101 备注：break会在bbb最后一个语句执行结束后执行，但却是在return之前，所以i自增了但没有返回。

// let arr = [1, 3, 10, 2, 20];
// let filRes = arr.filter((value) => value < 10);
// let mapRes = arr.map((value) => value < 10);
// console.log(filRes, mapRes); // [ 1, 3, 2 ] [ true, true, false, true, false ] 注意filter和map不要混淆

// console.log(typeof Date.now()); // number 是自1970.1.1至今的毫秒数

// console.log(typeof "".prototype); // undefined
// console.log(typeof "".__proto__); // object
// console.log(typeof "".__proto__ === typeof "".prototype); // false

// var person = { fname: "John", lname: "Doe", age: 25 };
// var txt = "";
// for (let x in person) { // x是对象的key
//   txt = txt + person[x];
// }
// console.log(txt); // JohnDoe25

// console.log(Object.is(NaN, NaN)); // ture
// console.log(NaN === NaN); // false
// console.log(Object.is(+0, -0)); // false
// console.log(+0 === -0); // true

// let a = 20;
// function fn() {
//   a = 30;
// }
// fn();
// console.log(a); // 30

const { assert, log } = require("console");

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

// var a = [1, 2, 3];
// var b = a.slice();
// b.push(4);
// console.log(a);  // [1, 2, 3]

// let flag1 = null || undefined;
// let flag2 = null && undefined;
// if (flag1 === true) console.log("flag1");
// if (flag2 === false) console.log("flag2");
// // 什么都不会输出

// console.log(isNaN(1 / 0)); // Infinity is number. isNaN(Infinity) === false

// let type;
// console.log(type || "json"); // json
// type = "number";
// console.log(type || "json"); // number

// var str1 = new RegExp("e");
// console.log(str1.exec("hello")); // ['e']
// document.write(str1.exec("hello")); // e document.write如果传入的是数组会默认调用toString方法

// for (var i = 0; i < 5; i++) {
//   requestAnimationFrame(() => console.log(i)); // 5个5  如果换成let i，那么结果就是0 1 2 3 4
// }

// (function () {
//   var a = b = 5;
// })();
// console.log(b); // 5  b在function中没有找到，所以被定义成了一个全局变量
// console.log(a); // undefined  a在function中定义，在全局中是访问不到的

// const test = {
//   rules: false,
// };
// function Build() {
//   this.rules = true;
//   console.log(this.rules); // true
//   return test;
// }
// const build = new Build();
// console.log(build.rules); // false

// function Person(age) {
//   this.age = age;
// }
// Person.prototype = {
//   constructor: Person,
//   getAge: function () {
//     console.log(this.age);
//   },
// };
// var ldh = new Person(24);
// Person.prototype.age = 18;
// Object.prototype.age = 20;
// ldh.getAge(); // 24  按照原型链的顺序查找，先从自身开始找，然后到构造函数的原型对象，再到Object的原型对象，找到则返回，否则undefined

// let obj = { name: "A" };
// console.log(Object.assign(obj, { age: 18 })); // {name:"A", age:18}

// let A = function() {}
// A.prototype.a = 1;
// let B = new A();
// A.prototype = {
//   b: 2,
//   c: 3
// }
// let C = new A();
// A.prototype.d = 4;
// console.log(B.a); // 1
// console.log(B.b); // undefined
// console.log(C.c); // 3
// console.log(C.d); // 4
/* 解释：首先需要明确new方法返回的是构造函数的prototype也就是一个对象，其中直接给对象上不存在的a变量赋值相当于往这个对象添加了一个a变量，
因此B可以访问到变量a，但是后续是直接赋值了一个对象，那么原对象就无法感知到了，所以B访问不到新对象的变量b，也因此产生了新旧两个prototype的引用。
C的话拿到的是新对象以及往新对象里面新增的d变量。*/

// var foo = { n: 1 };
// (function (foo) {
//   console.log(foo.n); // 1  局部变量被赋值前优先级低于形参，无效。
//   foo.n = 3;
//   var foo = { n: 2 };
//   console.log(foo.n); // 2  foo被赋值指向新的内存空间，输出2
// })(foo);
// console.log(foo.n); // 3  全局foo已经被修改为3，输出3
/* 补充：如果局部变量foo是通过let声明的，会直接报错：SyntaxError: Identifier 'foo' has already been declared */

// const p = new Promise((resolve, reject) => {
//   reject("fail");
// });
// p.catch((err) => console.log(err)); // fail
// p.catch((err) => console.log(err)).then((res) => console.log(res)); // fail  undefined

// function getPersonInfo(one, two, three) {
//   console.log(one);
//   console.log(two);
//   console.log(three);
// }
// const person = "Lydia";
// const age = 21;
// getPersonInfo`${person} is ${age} years old`;
// /* 输出结果：[ '', ' is ', ' years old' ]   Lydia   21 */

// Promise.all([]).then((res) => {
//   console.log("all"); // all
// });
// Promise.race([]).then((res) => {
//   console.log("race"); // 无输出
// });

/* 实现数组去重 */
// let nums = [6, 2, 4, 2, 5, 1, 6];
// let newNums = [];
// // 方法1
// newNums = Array.from(new Set(nums));
// console.log(newNums);
// // 方法2
// newNums = nums.filter((value, index) => {
//   return nums.indexOf(value) === index;
// });
// console.log(newNums);
// 方法3
// nums.forEach((value, index) => {
//   if (nums.indexOf(value) === index) {
//     newNums.push(value);
//   }
// });
// console.log(newNums);
// // 方法4
// newNums = nums.reduce((acc, value, index) => {
//   return [].concat(acc, nums.indexOf(value) === index ? value : []);
// });
// console.log(newNums);

// var x = typeof x;
// var res = typeof typeof x;
// console.log(res); // string

// function addToList(item, list) {
//   return list.push(item);
// }
// const result = addToList("nowcoder", ["hello"]);
// console.log(result); // 2

// setTimeout(() => {
//   console.log(2);
// });
// Promise.resolve().then(() =>
//   setTimeout(() => {
//     console.log(4);
//   })
// );
// setTimeout(() => {
//   console.log(6);
// });
/* 264  4所在promise先将箭头函数加入微任务队列，然后再执行该函数（此时2和6所在的setTimeout已经被加入宏任务队列），
最后4所在的setTimeout被加入宏任务队列。因此执行结果为264 */

// setTimeout(() => {
//   console.log(2);
// });
// Promise.resolve().then(
//   setTimeout(() => {
//     console.log(4);
//   })
// );
// setTimeout(() => {
//   console.log(6);
// });
/* 246  2、4、6依次被加入宏任务队列，因此执行结果为246 */

// 命名计时器
// console.time("my operation");
// for (let i = 0; i < 10; i++) {
//   setTimeout(function () {
//     console.log(i); // 0~9
//   }, 100);
// }
// console.timeEnd("my operation");

// var 和 let 对于输出结果的不同影响
// for (var i = 0; i < 9; i++) {
//   setTimeout(function () {
//     console.log(i); // 10个10
//   }, 0);
// }

// setTimeout(() => {
//   console.log(1);
// });
// new Promise(function executor(resolve) {
//   console.log(2);
//   resolve();
//   console.log(3);
// }).then(() => {
//   console.log(4);
// });
// console.log(5);
// 输出顺序：2 3 5 4 1

// 敏感词过滤
// function filterSensitiveWord(str, arr) {
//   arr.forEach((element) => {
//     const reg = new RegExp(`${element}`, "g"); // 利用正则表达式实现敏感词筛选
//     str = str.replace(reg, "*".repeat(element.length));
//   });
//   return str;
// }
// console.log(filterSensitiveWord("want to die, fuck, sexy women", ["die", "ex", "uc"]));

// let res = [1, 2, 3].findIndex((e) => e === 2); // findIndex参数为函数

// 插入排序
// function insertSort(arr) {
//   let preIndex, current;
//   for (let i = 1; i < arr.length; i++) {
//     preIndex = i - 1;
//     current = arr[i];
//     while (preIndex >= 0 && arr[preIndex] > current) {
//       arr[preIndex + 1] = arr[preIndex];
//       preIndex--;
//     }
//     arr[preIndex + 1] = current;
//   }
//   return arr;
// }

// 快速排序
// function quickSort(arr) {
//   if (arr.length <= 1) return arr;
//   let mid = [],
//     left = [],
//     right = [];
//   let standard = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === standard) mid.push(standard);
//     else if (arr[i] < standard) left.push(arr[i]);
//     else right.push(arr[i]);
//   }
//   return [...quickSort(left), ...mid, ...quickSort(right)];
// }

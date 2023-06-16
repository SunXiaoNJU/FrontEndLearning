// 1. setTimeout 输出
for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
// 答案：10个10

// 2. 问输出
let bar = [1, 2, 3];
for (var i in bar) {
  setTimeout(function () {
    console.log(bar[i]);
  }, 0);
  console.log(bar[i]);
}
// 123 333

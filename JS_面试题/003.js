// 以下代码输出什么(ps:本题不可以格式化文档)
let a = b = 10;
(function () {
  let a = b = 20;
})();
console.log(a, b);

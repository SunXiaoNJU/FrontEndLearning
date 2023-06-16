// 写出输出结果 （字节前端）
let x = 5;
function fn(x) {
  return function (y) {
    console.log(y + ++x);
  };
}
let f = fn(6);
f(7);
fn(8)(9);
console.log(x);

/* 14 18 5 */

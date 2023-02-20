// 写出输出结果
function outerFunc() {
  let a = 10;
  function innerFunc() {
    console.log(a);
  }
  return innerFunc;
}
let innerFunc = outerFunc();
innerFunc();

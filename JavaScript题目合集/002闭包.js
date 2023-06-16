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

/* 
输出：10
在词法范围内，innerFunc任然可以访问a，即使在其词法范围之外执行。
换句话说，innerFunc从其词法范围中记住（或关闭）变量a。
换句话说，innerFunc是一个闭包，因为它在变量a的词法范围内关闭。

因此，这段代码不会抛出异常，而是输出10。
*/

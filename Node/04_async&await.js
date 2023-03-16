/*  
async声明的异步函数，会自动封装到promise中返回。
在async声明的异步函数中，可以使用await关键字来调用异步函数，主要目的就是以同步方式调用异步代码。
注意：await只能作用于 async声明的异步函数 或 es模块的顶级作用域。 await is only valid in async functions and the top level bodies of modules
*/
async function fn1() {
  console.log("async fn1");
  return "fn1";
}
fn1().then((res) => {
  console.log(res);
});

(async () => {
  console.log("async fn2");
  return "fn2";
})().then((res) => {
  console.log(res);
});

async function fn3() {
  console.log("async fn3");
  return "fn3";
}

async function fn_await() {
  // 当我们使用await去调用异步函数时，它会暂停代码的运行，直到异步代码有结果时才会将结果返回。
  // await阻塞的只是内部函数的代码，不会影响外部代码。
  // await需要通过try-catch来处理异常。
  try {
    let result = await fn3();
    console.log(result);
    console.log("await后的输出~");
  } catch (error) {
    console.error(error);
  }
}
fn_await();

console.log("全局中的输出~");

// 如果async中没有写await，那么它就会依次执行。以下执行结果:1 2 3 4
// async function test() {
//   console.log("test 1");
//   console.log("test 2");
//   console.log("test 3");
// }
// test();
// console.log("test outer 4");

// 如果在普通代码前加上await，相当于将其后面的语句都加入了then中
async function test2() {
  console.log("test 1");
  await console.log("test 2");
  console.log("test 3");
}
test2();
console.log("test outer 4");

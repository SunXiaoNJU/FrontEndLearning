/* 
事件循环（Event Loop）是 JavaScript 引擎用来处理异步操作的机制。JavaScript 是单线程执行的语言，它的任务执行是基于事件循环的。
当 JavaScript 引擎执行到一个异步操作时（例如定时器、网络请求、用户事件等），它会将该操作放入任务队列（Task Queue）中，并继续执行后续的同步任务。
当所有同步任务执行完毕时，JavaScript 引擎会从任务队列中取出一个任务执行，这个过程不断重复，直到任务队列为空。

JavaScript 中有两种类型的任务队列：宏任务队列和微任务队列。
宏任务队列中存放的是一些异步操作的回调函数，例如定时器回调函数、网络请求回调函数、事件回调函数等。
微任务队列中存放的是一些需要在当前任务执行结束后立即执行的任务，例如 Promise 的回调函数、MutationObserver 回调函数等。
在每次事件循环中，先执行所有的微任务，然后再执行一个宏任务，这个过程不断重复。

简单来说，事件循环的流程如下：
1.执行当前任务（同步任务）。
2.将所有微任务添加到微任务队列并执行。
3.执行宏任务队列中的第一个任务。
4.重复步骤 2 和步骤 3，直到任务队列为空。

需要注意的是，每个任务队列中的任务都是有优先级的，例如：
setImmediate 和 process.nextTick 会优先于 setTimeout 执行，MutationObserver 会优先于 requestAnimationFrame 执行等。
此外，在执行微任务队列中的任务时，如果在某个任务执行过程中产生了新的微任务，
这些新的微任务会被添加到当前的微任务队列中，而不是下一个事件循环的微任务队列中。这也是需要注意的一个细节。
*/
console.log("script start");

setTimeout(function () {
  console.log("setTimeout");
  Promise.resolve()
    .then(() => {
      console.log("ST_then1");
    })
    .then(() => {
      console.log("ST_then2");
    });
}, 10);

setImmediate(function () {
  console.log("Immediate");
  Promise.resolve()
    .then(() => {
      console.log("SI_then1");
    })
    .then(() => {
      console.log("SI_then2");
    });
});

Promise.resolve()
  .then(function () {
    console.log("resolve");
  })
  .then(() => {
    console.log("then");
  })
  .then(() => {
    setTimeout(() => {
      console.log("then_ST");
    }, 1);
  });

Promise.reject().catch(() => {
  console.log("reject");
});

console.log("script end");

/*
核心模块
    process
        - 表示当前的node进程
        - 通过该对象可以获取进程的信息，或者对进程做各种操作
        - 如何使用：
            1. process是一个全局变量，可以直接使用
            2. 有那些属性和方法：
                process.exit() 结束当前进程，终止node
                process.nextTick(callback[, ...args]) 将函数加入到tick队列中，会在下一次事件循环之前执行
                        
*/
setTimeout(() => {
  console.log(1); // 宏任务队列
});
queueMicrotask(() => {
  console.log(2); // 微任务队列
});
process.nextTick(() => {
  console.log(3); // tick队列
});
console.log(4); // 调用栈
/* 顺序：调用栈 -> tick队列 -> 微任务队列 -> 宏任务队列 */

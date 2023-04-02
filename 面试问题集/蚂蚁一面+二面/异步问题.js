/* 不使用async和await，实现events的顺序执行 */
function eventA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Event A is done");
      resolve();
    }, 1000);
  });
}

function eventB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Event B is done");
      resolve();
    }, 500);
  });
}

function eventC() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Event C is done");
      resolve();
    }, 2000);
  });
}

const events = [eventA, eventB, eventC];

// 事件一个个执行
eventA()
  .then(() => eventB())
  .then(() => eventC());

// 如果使用async和await则写法如下：
// (async () => {
//   for (const event of events) {
//     await event();
//   }
// })();

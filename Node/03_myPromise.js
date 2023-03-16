const PROMISE_STATE = {
  PENDIND: 0,
  FULLFILLED: 1,
  REJECTED: 2,
};
class MyPromise {
  // resolve存储的值
  #value;
  // reject存储的值
  #reason;
  // 当前状态值
  #state = PROMISE_STATE.PENDIND;
  // 数组存储回调函数
  #callbacks = [];

  constructor(executor) {
    // 接受一个执行器作为参数，调用回调函数。
    executor(this.#resolve, this.#reject);
  }

  // 加#成为私有方法，用来存储成功的数据。用箭头函数可以防止实例调用时改变this的指向！
  #resolve = (value) => {
    // state不为pending表示数据已经被传入，不可以覆盖之前的数据。
    if (this.#state !== PROMISE_STATE.PENDIND) return;
    this.#value = value;
    this.#state = PROMISE_STATE.FULLFILLED;

    // 当resolve执行时，说明数据已经被传入，此时需要调用then存储在callback中的回调函数。
    queueMicrotask(() => {
      this.#callbacks.forEach((cb) => cb());
    });
  };

  #reject = (reason) => {
    if (this.#state !== PROMISE_STATE.PENDIND) return;
    this.#reason = reason;
    this.#state = PROMISE_STATE.REJECTED;
  };

  // then用来读取数据
  then(onFullfilled, onRejected) {
    // 返回一个新的promise
    return new MyPromise((resolve, reject) => {
      if (this.#state === PROMISE_STATE.PENDIND) {
        // 说明数据还没有进入promise, 将onFullfilled封装了加入callbacks
        this.#callbacks.push(() => {
          // then中回调函数的返回值会成为新的promise中的数据
          resolve(onFullfilled(this.#value));
        });
      } else if (this.#state === PROMISE_STATE.FULLFILLED) {
        // 放入微任务队列中执行
        queueMicrotask(() => {
          resolve(onFullfilled(this.#value));
        });
      } else {
        queueMicrotask(() => {
          reject(onRejected(this.#reason));
        });
      }
    });
  }
}

// 实例验证
const mp = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("myPromise success!");
  }, 100);
});
mp.then((res) => {
  console.log(res, 0);
  return "return 1";
})
  .then((res) => {
    console.log(res, 1);
    return "return 2";
  })
  .then((res) => {
    console.log(res, 2);
  });

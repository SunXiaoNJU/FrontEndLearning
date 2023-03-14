class myPromise {
  constructor(cb) {
    this.cb = cb;
  }

  then(cb) {
    cb();
    return new myPromise(cb);
  }
}

const mp = new myPromise((resolve, reject) => {
  resolve("myPromise success");
});
mp.then((res) => {console.log(res);});

// a每一次调用valueOf都会使其自增，这个方法会在对象被强制类型转换为原始值时调用
let a = {
  val: 0,
  valueOf: function () {
    return ++a.val;
  },
};
// 给a赋值使得以下判断成立打印Win
if (a == 1 && a == 2 && a == 3) {
  console.log("Win");
}

// 在globalThis中定义b的get属性
Object.defineProperties(globalThis, {
  _b: {
    value: 0,
    writable: true,
  },
  b: {
    get: function () {
      return ++_b;
    },
  },
});
// 给b赋值使得以下判断成立打印Win
if (b === 1 && b === 2 && b === 3) {
  console.log("Win");
}

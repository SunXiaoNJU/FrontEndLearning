var Person = (function () {
  function Person(name) {
    this._name = name;
  }
  Person.prototype.greet = function () {
    console.log("" + this._name);
  };
  Person.prototype.greetDelay = function (time) {
    // setTimeout()调用的代码运行在与所在函数完全分离的执行环境上。
    // 这会导致这些代码中包含的 this 关键字会指向 window (或全局)对象。
    // 有两个解决方法：1. 局部变量 var _this = this  2. 箭头函数（ES6才有）
    var _this = this;
    setTimeout(function () {
      console.log("" + _this._name);
    }, time);
  };
})();

/* 
1. ES5没有箭头函数，只有function。
2. ES5没有constructor，需要自己写构造函数。
3. ES5需要通过原型来添加方法。
4. 类会转换成立即执行函数。
*/
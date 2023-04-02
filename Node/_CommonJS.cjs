/* 
CommonJS规范
使用.cjs扩展名

引入模块：使用require()函数来引入模块。
    - 引入自定义的模块地址需要使用相对地址（./或../开头）
    - 引入核心模块直接写名字即可。例如：path, fs

定义模块时，模块中的内容默认是不能被外部看到的。
可以通过exports来设置要向外部暴露的内容。

访问exports的方式：
    exports
    module.exports
    - 当我们在其他模块中引入当前模块时，require模块返回的就是exports
    - 可以将希望暴露给外部模块的内容设置为exports属性

所有的CommonJS的模块都是被包装到一个函数中：
(function(exports, require, module, __filename, __dirname) {});
*/
const cj = require("./_CommonJS.cjs");

// 可以通过exports一个一个导出值
exports.name = "Jack";
exports.age = 18;

// 也可以通过module.exports导出多个值（一旦对module.exports赋值，exports中设置的值都会失效）
module.exports = {
  name: "ross",
  age: 20,
  occupation: "software engineer",
};

console.log(arguments); // 只有函数中才存在arguments，这样可以证明CommonJS确实是被封装进了一个函数中。

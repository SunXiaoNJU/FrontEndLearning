var a;
a = 10;
// 直接赋值的不需要在声明类型了，会自动判别。
var b = "hello";
console.log(a, b);
function sum(a, b) {
    return a + b;
}
var clickHandler; // 函数类型提前声明
clickHandler = function (cnt) {
    console.log(cnt);
};
// 字面量类型，只可以选择限定的类型
var sex;
sex = "male";
console.log(sex);
// 不写类型会隐式成为any类型，即关闭了ts的类型检测，还可以赋给任意变量。
var anyDemo;
// unknown是类型安全的any，不可以直接赋值给别的变量，需要类型判断或类型断言！
var unknownDemo = "unknown string";
/* 类型断言: 1.变量 as 类型  2. <类型>变量 */
b = unknownDemo;
// 对象类型声明，?: 表示可有可无，[propName: string]: unknown 表示接收任意类型的属性
var obj;
obj = { name: "Samuel", age: 18, gender: "male" };
// 数组声明: 1. 类型[]  2. Array<类型>
// 限定数组数据类型为string
var obj_str;
obj_str = ["a", "b", "c"];
var m;
m = false;

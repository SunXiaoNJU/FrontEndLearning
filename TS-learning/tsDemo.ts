let a: number;
a = 10;
// 直接赋值的不需要在声明类型了，会自动判别。
let b = "hello";
console.log(a, b);

function sum(a: number, b: number): number {
  return a + b;
}

let clickHandler: (a: string) => void; // 函数类型提前声明
clickHandler = (cnt: string): void => {
  console.log(cnt);
};

// 字面量类型，只可以选择限定的类型
let sex: "male" | "female" | string;
sex = "male";
console.log(sex);

// 不写类型会隐式成为any类型，即关闭了ts的类型检测，还可以赋给任意变量。
let anyDemo;

// unknown是类型安全的any，不可以直接赋值给别的变量，需要类型判断或类型断言！
let unknownDemo: unknown = "unknown string";
/* 类型断言: 1.变量 as 类型  2. <类型>变量 */
b = unknownDemo as string;

// 对象类型声明，?: 表示可有可无，[propName: string]: unknown 表示接收任意类型的属性
let obj: { name?: string; [propName: string]: unknown };
obj = { name: "Samuel", age: 18, gender: "male" };

// 数组声明: 1. 类型[]  2. Array<类型>
// 限定数组数据类型为string
let obj_str: string[];
obj_str = ["a", "b", "c"];

// 类型别名
type myType = string | number | boolean;
let m: myType;
m = true;

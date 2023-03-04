/* parseInt中，如果 radix 是 undefined、0 或未指定的，JavaScript会假定以下情况：
1.如果输入的 string 以 0x 或 0X（一个 0，后面是小写或大写的 X）开头，那么 radix 被假定为 16，字符串的其余部分被当做十六进制数去解析。
2.如果输入的 string 以 "0"（0）开头，radix 被假定为 8（八进制）或 10（十进制）。具体选择哪一个 radix 取决于实现。ECMAScript 5 澄清了应该使用 10 (十进制)，但不是所有的浏览器都支持。因此，在使用 parseInt 时，一定要指定一个 radix。
3.如果输入的 string 以任何其他值开头，radix 是 10 (十进制)。
4.如果第一个字符不能转换为数字，parseInt 会返回 NaN。 
*/
console.log(parseInt("0x111")); // 273  0x开头，16进制

console.log(parseInt("0e9")); // 0  e属于字符串，后面的就不看了

console.log(parseInt(15.99)); // 15 去除小数
console.log(parseInt(-15.99)); // -15

/* 
parseFloat返回浮点数
*/
console.log(parseFloat("3.14.5")); // 3.14  第二个.是字符串

console.log(parseFloat(15)); // 15

console.log(parseFloat("0x111")); // 0  parseFloat没有radix，都是10进制

console.log(parseFloat(132343245354332343423n)); // 132343245354332340000 整数太大会失去精度

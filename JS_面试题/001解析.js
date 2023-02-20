/* map：(method) Array<string>.map<number>(callbackfn: (value: string, index: number, array: string[])
=> number, thisArg?: any): number[]
所以等式右边实际上执行的是[parseInt('2', 0), parseInt('3', 1), parseInt('4', 2)]，
如果第二个参数是0，JS则会根据第一个参数来决定进制。
结果就变成了[2, NaN, NaN]
*/

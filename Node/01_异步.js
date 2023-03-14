let start = Date.now();
function sum(a, b) {
  // 等待10s
  while (Date.now() - start < 10000) {}
  return a + b;
}
console.log("sum is:", sum(1, 2));

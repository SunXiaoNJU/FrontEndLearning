function foo() {
  console.log("foo");
  clearInterval(id);
}
id = setInterval(foo, 1000);
console.log("1`1");
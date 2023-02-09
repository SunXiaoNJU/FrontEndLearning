// (a)
console.log("a----------------");
var value = 2021;
function fn() {
  console.log(value);
  var value = { name: "Time" };
  console.log(value);
}
fn();
console.log(value);

// (b)
console.log("b----------------");
{
  console.log(bar);
  console.log(foo);
  var bar = 1;
  var foo = 2;
}

// (c)
console.log("c----------------");
var foo = {
  bar: 10,
  fn: function () {
    console.log(this);
    console.log(this.bar);
  },
};
foo.fn();

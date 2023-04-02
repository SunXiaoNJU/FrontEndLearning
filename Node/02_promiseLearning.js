const promise = new Promise((resolve, reject) => {
  resolve(123);
}).then((data) => {
  console.log(data);
});

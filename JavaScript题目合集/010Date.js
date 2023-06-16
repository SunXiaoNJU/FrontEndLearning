const now = Date.now();
setTimeout(() => {
  console.log("time100", Date.now() - now);
}, 100);
setTimeout(() => {
  console.log("time300", Date.now() - now);
}, 300);
while (true) {
  if (Date.now() - now >= 200) break;
}
console.log(Date.now() - now);

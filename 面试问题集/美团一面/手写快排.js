function _quickSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = arr[0],
    left = [],
    right = [],
    mids = [];
  for (let num of arr) {
    if (num < mid) left.push(num);
    else if (num > mid) right.push(num);
    else mids.push(num);
  }
  return [..._quickSort(left), ...mids, ..._quickSort(right)];
}

console.log(_quickSort([3, 1, 4, 9, 6, 2, 3, 3, 7]).join(" "));

// 节流：n秒内只运行一次，若在n秒内重复触发，只有一次生效
function throttled(fn, delay = 500) {
  let timeout = null;
  return function (...args) {
    if (!timeout) {
      timeout = setTimeout(() => {
        fn.apply(this, args);
        timeout = null;
      }, delay);
    }
  };
}

// 防抖：n秒后再执行该事件，若在n秒内被重复触发，则重新计时
function debounce(fn, delay = 500) {
  let timeout = null;
  return function (...args) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

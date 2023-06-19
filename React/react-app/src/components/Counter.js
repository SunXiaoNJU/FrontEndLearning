import React, { useEffect, useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setCounter(counter + 1);
    }, 1000);
    // 返回时去除定时器，使得每次组件重新渲染时不会设置定时器
    return () => {
      clearInterval(timer);
    };
  }, [counter]);

  return (
    <>
      <div>定时器：{counter}秒</div>
    </>
  );
}

export default Counter;

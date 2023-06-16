import React from "react";

function Son(props) {
  /*props指向的是一个对象，包含了父组件中传递的所有参数。
    props是只读的，不可以修改！
  */
  console.log(props);

  // 解构赋值
  let { sayHello, date, desc, time } = props;
  const date_fetch = date.toLocaleString("zh-CN", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  return (
    // 使用时 className 会被组件内预设的 className 覆盖，所以需要通过 props 在预设里追加porps.className
    <div className={`div ${props.className}`}>
      <button
        onClick={sayHello}
        style={{ fontSize: "15px", borderRadius: "15px" }}
      >
        我在
        {/* 在React中，date对象是不可以直接显示的，需要通过toLoacaleString来转换格式，详见Date.html */}
        {date_fetch}开始学习{desc}，一共学习了{time}分钟。
      </button>
    </div>
  );
}

export default Son;

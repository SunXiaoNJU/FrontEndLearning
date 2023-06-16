import React from "react";

function event() {
  function clickHandler(event) {
    /* 
    在React中无法通过return false取消默认行为
    React的事件对象：
        - 会传递事件对象，可以在响应函数中定义参数来接收事件对象
        - 不是原生事件对象，是React包装后的事件对象
        - 由于对象经过包装，所以使用过程中就无需考虑兼容性问题
    */
    event.preventDefault(); // 取消默认行为
    event.stopPropagation(); // 取消事件的冒泡

    alert("哈哈哈哈");
  }

  return (
    <div
      onClick={() => {
        alert("div");
      }}
    >
      {/* 在React中，事件需要通过元素的属性来设置，和原生的JS不同，在React中事件的属性采用驼峰命名法：onclick -> onClick onchange -> onChange
      属性值不能直接执行代码，需要一个回调函数：onclick="alert(123)" -> onClick={()=>{alert(123)}}
      */}
      <button
        onClick={() => {
          alert("Hello~");
        }}
      >
        CLICK ME
      </button>
      {/* 将clickHandler设置为响应函数 */}
      <button onClick={clickHandler}>点我</button>
    </div>
  );
}

export default event;

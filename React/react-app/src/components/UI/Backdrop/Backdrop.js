import React from "react";
import css from "./Backdrop.module.css";
import ReactDOM from "react-dom";

// 获取backdrop的根元素
const backdropRoot = document.querySelector("#backdrop-root");

// 遮罩层，嵌套在组件外部使得其余内容被遮罩，只有其内部组件可以操作
function Backdrop(props) {
  // 使用传送门protal来单独渲染backdrop
  return ReactDOM.createPortal(
    <div className={css.backdrop}>
      {props.children /* 通过props.children来显示内部组件 */}
    </div>,
    backdropRoot
  );
}

export default Backdrop;

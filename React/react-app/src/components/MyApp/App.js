import logo from "../pic/logo.svg";
// 外部样式表 CSS Module
import appStyle from "./App.module.css";
import { useState } from "react";

// 使用 rfc快捷键 可以一键生成函数式组件~ （已安装ES7+ React/Redux/React-Native snippets插件）
export default function App() {
  // useState设置状态
  const [p_color, setColor] = useState(false);
  const [p_size, setSize] = useState(false);

  const clickHandler = () => {
    if (p_color) setColor(false);
    else setColor(true);
    if (p_size) setSize(false);
    else setSize(true);
  };

  return (
    <div className={appStyle.App}>
      <header className={appStyle.App_header}>
        <img src={logo} className={appStyle.App_logo} alt="logo" />
        <p
          className={`${appStyle.p_style} ${p_color ? appStyle.color_red : ""}`}
          onClick={clickHandler}
          style={{
            borderRadius: "3vh",
            fontSize: "3vh",
          }}
        >
          App.js
        </p>
        <a
          className={appStyle.App_link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

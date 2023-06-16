import React from "react";
import SonClass from "./SonClass";

// 类组件必须继承React.Component  相较于函数式组件，功能是一样的。快捷键：rcc
class ClassDemo extends React.Component {
  // 类组件中必须添加一个render()方法，且方法的返回值是JSX
  render() {
    return (
      <div className="classDemo">
        <SonClass name="lihua" age={18} gender="man" />
      </div>
    );
  }
}

export default ClassDemo;

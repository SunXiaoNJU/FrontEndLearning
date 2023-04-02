import React from "react";

// 类组件必须继承React.Component  相较于函数式组件，功能是一样的。
class ClassDemo extends React.Component {
  // 类组件中必须添加一个render()方法，且方法的返回值是JSX
  render() {
    return <div>我是一个类组件</div>
  }
}

export default ClassDemo;

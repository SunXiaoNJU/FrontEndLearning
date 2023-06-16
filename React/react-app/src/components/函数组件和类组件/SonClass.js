import React, { Component } from "react";

export default class SonClass extends Component {
  // 在类组件中，props是存储在类的实例对象中的，可以直接通过实例对象访问：this.props
  // 类组件中，state统一存储到了实例对象的state属性中，可以通过this.state访问，this.setState()修改(render外面可以不写this)
  state = {
    counter: 0,
    test: "hhh",
  };

  // createRef()创建属性存储DOM对象，将这个属性设置为指定元素的ref值(用法与useRef一样)
  ulRef = React.createRef();

  // 这里传入的是之前的state，每次都是对整个state进行修改。优点是React只会修改设置了的属性，其余的不会被覆盖。
  // Tip：在类组件中响应函数都应该以箭头函数的形式定义，避免this的改变。
  clickHandler = () => {
    this.setState((preState) => {
      return {
        counter: preState.counter + 1,
      };
    });
  };

  render() {
    return (
      <div className="sonClass">
        <button onClick={this.clickHandler}>Click</button>
        <ul ref={this.ulRef}>
          <li>{this.state.counter}</li>
          <li>姓名：{this.props.name}</li>
          <li>年龄：{this.props.age}</li>
          <li>性别：{this.props.gender}</li>
        </ul>
      </div>
    );
  }
}

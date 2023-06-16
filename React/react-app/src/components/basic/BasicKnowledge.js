import React from "react";
import ReactDOM from "react-dom/client";
/* 
React.createElement()
    - 用来创建一个React元素
    - 参数：
        1. 元素的标签（html标签必须小写） 
        2. 元素中的属性（在设置事件时需要驼峰命名法，例如onClick；class需要使用className来设置）
        3. 元素的子元素（内容）
    注意：React元素一旦创建就无法修改！只能创建新元素来替换，再重新渲染root。
    当调用render渲染页面时，React会自动比较两次渲染的元素，只在真实的DOM中更新发生变化的部分，没发生变化的保持不变。
    虽然后续使用JSX之后就不会再用到这个方法了，但是还是有必要了解一下的。
*/
const div = React.createElement(
  "div",
  {
    id: "learn01",
    className: "learn01",
    onClick: { generator },
    style: { backgroundColor: "yellowgreen" },
  },
  <p>我的div元素</p>,
  <ul>
    <li>first</li>
    <li>second</li>
  </ul>
  // 可以一直通过逗号设置下去
);

function generator() {
  console.log("onClick");
}

// 创建React根元素，需要一个DOM元素作为参数
const root_01 = ReactDOM.createRoot(document.querySelector("#01_learning"));
// 将div渲染到根元素中
root_01.render(div);
